import { z } from "zod";

import contactFormSchema from "@/schemas/contactForm";

type Contact = z.infer<typeof contactFormSchema>;

export default Contact;
