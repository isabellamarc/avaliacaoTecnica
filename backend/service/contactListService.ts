import contactList from '../models/contactlist';
import 'dotenv/config';

class ContactListService {

  public getAll = async (): Promise<contactList[]> => {
    const teams = await contactList.findAll();
    return teams;
  };

  public getById = async (id: number): Promise<contactList | null> => {
    const team = await contactList.findOne({ where: { id } });
    return team;
  };

  public createContacts = async (
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const match = await contactList.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return match;
  };

  public updateContacts = async (
    id: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const match = await contactList.findByPk(id);
    await contactList.update({
      homeTeamGoals,
      awayTeamGoals,
    }, { where: { id } });
  };
}

export default ContactListService;