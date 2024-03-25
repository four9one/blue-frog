import { z } from "zod";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Namn måste innehålla minst 3 bokstäver." })
    .max(40, { message: "Namn får max innehålla 40 bokstäver." }),
  email: z
    .string()
    .email({ message: "E-mailadressen är inte giltig." })
    .trim()
    .toLowerCase(),
  tel: z.string().optional(),
  postNr: z.string().optional(),
  city: z.string().optional(),
  message: z
    .string()
    .min(10, { message: "Meddelandet måste innehålla minst 10 tecken." })
    .max(400, { message: "Meddelandet får max innehålla 400 tecken." }),
});

export default contactFormSchema;
