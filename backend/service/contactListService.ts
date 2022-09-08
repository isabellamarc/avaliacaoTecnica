import contactList from '../models/contactlist';
import 'dotenv/config';

class ContactListService {

  public getAll = async (): Promise<contactList[]> => {
    const contacts = await contactList.findAll();
    return contacts;
  };

  public getById = async (id: number): Promise<contactList | null> => {
    const contact = await contactList.findOne({ where: { id } });
    return contact;
  };

  public createContacts = async (
    id: number,
    nome: string,
    email: string,
    telefone: number,
    whatsapp: number,
  ) => {
    const contact = await contactList.create({
      id,
      nome,
      email,
      telefone,
      whatsapp,
    });
    return contact;
  };

  public updateContacts = async (
    id: number,
    nome: string,
    email: string,
    telefone: number,
    whatsapp: number,
  ) => {
    const contact = await contactList.findByPk(id);
    await contactList.update({
        id,
        nome,
        email,
        telefone,
        whatsapp,
    }, { where: { id } });
  };

  public removeContacts = async (
    id: number,
    nome: string,
    email: string,
    telefone: number,
    whatsapp: number,) => {
    const contact = await contactList.findByPk(id);
    await contactList.remove({
        id,
        nome,
        email,
        telefone,
        whatsapp,
    }, { where: { id } });
  }
}

export default ContactListService;