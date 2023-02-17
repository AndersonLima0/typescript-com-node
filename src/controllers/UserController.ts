import { Response, Request } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "Anderson",
    email: "anderson@gmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: {
        name: "Anderson",
        email: "anderson@gmail.com",
      },
      message: {
        subject: "Estudo Typescript",
        body: "Ts com Node",
      },
    });
    return res.send();
  },
};
