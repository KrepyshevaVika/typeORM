import {MigrationInterface, QueryRunner} from "typeorm";

export class my1538477961451 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
       // await queryRunner.query(`ALTER TABLE "node" RENAME COLUMN "name" TO "title"`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS trigger_change_count_child_after_ins() CASCADE;`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS trigger_change_count_child_after_del() CASCADE;`);

        await queryRunner.query(`CREATE FUNCTION trigger_change_count_child_after_ins()
        RETURNS trigger AS
        $BODY$
        DECLARE
            tmp node%ROWTYPE;
        BEGIN
          SELECT * INTO tmp FROM node WHERE id = NEW.node_id;
        
          tmp.count_child = tmp.count_child + 1;
          
          UPDATE node
          SET count_child = tmp.count_child
          WHERE id = NEW.node_id; 
          
          return NEW;
        END;
        $BODY$
          LANGUAGE plpgsql;`);
        await queryRunner.query(`CREATE TRIGGER change_count_child_after_ins
        AFTER INSERT ON node FOR EACH ROW  
        EXECUTE PROCEDURE trigger_change_count_child_after_ins();`);
        await queryRunner.query(`CREATE FUNCTION trigger_change_count_child_after_del()
        RETURNS trigger AS
        $BODY$
        DECLARE
            tmp node%ROWTYPE;
        BEGIN
          SELECT * INTO tmp FROM node WHERE id = OLD.node_id;
        
          tmp.count_child = tmp.count_child - 1;
          
          UPDATE node
          SET count_child = tmp.count_child
          WHERE id = OLD.node_id; 
        
          return OLD;
        END;
        $BODY$
          LANGUAGE plpgsql;`);
        await queryRunner.query(`CREATE TRIGGER change_count_child_after_del
        AFTER DELETE ON node FOR EACH ROW  
        EXECUTE PROCEDURE trigger_change_count_child_after_del();`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("node", true);
        await queryRunner.dropTable("node_type", true);
        await queryRunner.query(`DROP FUNCTION IF EXISTS trigger_change_count_child_after_ins() CASCADE;`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS trigger_change_count_child_after_del() CASCADE;`);
    }

}
