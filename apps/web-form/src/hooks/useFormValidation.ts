import { z } from 'zod';

export const formSchema = z.object({
  projectName: z
    .string()
    .min(3, 'Project name must be at least 3 characters')
    .max(50, 'Project name must be at most 50 characters')
    .regex(/^[a-z0-9-]+$/, 'Only lowercase letters, numbers, and hyphens'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be at most 500 characters'),
  framework: z.enum(['react', 'vue', 'both']),
  prototypeType: z.enum(['dashboard', 'landing', 'admin', 'mobile', 'internal-tool', 'form-wizard', 'portal', 'ai-chat']),
  components: z.array(z.string()).min(1, 'Select at least 1 component'),
  features: z.array(z.string()),
  businessRules: z.string().max(2000).optional().default(''),
  repoVisibility: z.enum(['public', 'private']),
  collaborators: z.array(z.string()),
  ttlHours: z.number().min(1).max(720),
  azureRegion: z.string().min(1),
});

export type FormSchema = z.infer<typeof formSchema>;
