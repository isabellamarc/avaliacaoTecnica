import { Request, Response } from 'express';
import ContactListService from '../service/contactListService';

class ContactListController {
  private contactListService: ContactListService;

  constructor() {
    this.contactListService = new ContactListService();
  }

  public getAll = async (req: Request, res: Response) => {
    const contacts = await this.contactListService.getAll();
    res.status(200).json(contacts);
  };

  public getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const contact = await this.contactListService.getById(Number(id));
    res.status(200).json(contact);
  };

  public createContacts = async (req: Request, res: Response) => {
    const { id, nome, email, telefone, whatsapp } = req.body;
    const contact = await this.contactListService.createContacts(
        id,
        nome,
        email,
        telefone,
        whatsapp,
    );
    res.status(201).json(contact);
  };

  public updateContacts = async (req: Request, res: Response) => {
    const { id, nome, email, telefone, whatsapp } = req.body;
    await this.contactListService.updateContacts(id, nome, email, telefone, whatsapp);
    res.status(200).json({ message: 'Updated!' });
  };

  public removeContacts = async (req: Request, res: Response) => {
    const { id, nome, email, telefone, whatsapp } = req.body;
    await this.contactListService.removeContacts(id, nome, email, telefone, whatsapp);
    res.status(200).json({ message: 'Deleted!' });
  };
}

export default ContactListController;