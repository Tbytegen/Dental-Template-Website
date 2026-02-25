'use server';
/**
 * @fileOverview An AI-powered dental care advisor that provides general dental health advice
 * and advises users to seek professional consultation when necessary.
 *
 * - dentalHealthAdvisor - A function that handles user queries for dental advice.
 * - DentalHealthAdvisorInput - The input type for the dentalHealthAdvisor function.
 * - DentalHealthAdvisorOutput - The return type for the dentalHealthAdvisor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DentalHealthAdvisorInputSchema = z.object({
  query: z.string().describe('The user\'s dental health question.'),
});
export type DentalHealthAdvisorInput = z.infer<
  typeof DentalHealthAdvisorInputSchema
>;

const DentalHealthAdvisorOutputSchema = z.object({
  advice: z
    .string()
    .describe('General dental health advice based on the query.'),
  consultationAdvised: z
    .boolean()
    .describe(
      'True if a professional consultation is advised based on the query, otherwise false.'
    ),
});
export type DentalHealthAdvisorOutput = z.infer<
  typeof DentalHealthAdvisorOutputSchema
>;

export async function dentalHealthAdvisor(
  input: DentalHealthAdvisorInput
): Promise<DentalHealthAdvisorOutput> {
  return dentalHealthAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dentalHealthAdvisorPrompt',
  input: {schema: DentalHealthAdvisorInputSchema},
  output: {schema: DentalHealthAdvisorOutputSchema},
  prompt: `You are an AI-powered dental health advisor for Nairobi Dental, a premium dental service.
Your goal is to provide general, informative answers to user queries about dental health.

If the user's question indicates a need for personalized diagnosis, treatment, or any condition that seems serious, urgent, or requires direct medical attention, you must set the 'consultationAdvised' field to true and strongly advise them to schedule a professional consultation.
Otherwise, provide general advice and set 'consultationAdvised' to false.

Be informative, helpful, and encourage good dental hygiene practices. Maintain a professional, empathetic, and reassuring tone.

User Query: {{{query}}}`,
});

const dentalHealthAdvisorFlow = ai.defineFlow(
  {
    name: 'dentalHealthAdvisorFlow',
    inputSchema: DentalHealthAdvisorInputSchema,
    outputSchema: DentalHealthAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
