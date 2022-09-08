import * as express from 'express';
import 'express-async-errors';
import ContactListController from '../controller/contactListController';

// get - select - listar - 1
// post - insert - criar 2
// put - update - atualizar - 3
// delete - 4

class App {
    public app: express.Express;
    private contactListcontroller = new ContactListController();
    
    constructor() {
        this.app = express();
        
        this.app.get('/', (req, res) => res.json({ ok: true }));
        // 1
        app.get('/', (req, res) => this.contactListcontroller.getById(req, res));
        // 2
        app.get('/', (req, res) => this.contactListcontroller.createContacts(req, res));
        // 3
        app.get('/', (req, res) => this.contactListcontroller.updateContacts(req, res));
        // 4
        app.get('/', (req, res) => this.contactListcontroller.removeContacts(req, res));
    }

  public start(PORT: number):void {
    this.app.listen(PORT);
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();