import { STRING, INTEGER, Model } from 'sequelize';
import db from '.';

class ContactList extends Model {
  declare id: number;
  declare nome: string;
  declare email: string;
  declare telefone: number;
  declare whatsapp: number;
}

ContactList.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: true,
  },
  telefone: {
    type: INTEGER,
    allowNull: true,
  },
  whatsapp: {
    type: INTEGER,
    allowNull: true,
  },
}, {
  modelName: 'contactList',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

export default ContactList;
