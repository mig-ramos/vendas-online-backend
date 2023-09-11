"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableCity1675388992280 = void 0;
class createTableCity1675388992280 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.city (
                id integer NOT NULL,
                state_id integer NOT NULL,
                name character varying NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (state_id) references public.state(id)
            );
            CREATE SEQUENCE public.city_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.city_id_seq OWNED BY public.city.id;
            ALTER TABLE ONLY public.city ALTER COLUMN id SET DEFAULT nextval('public.city_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            drop table public.city;
        `);
    }
}
exports.createTableCity1675388992280 = createTableCity1675388992280;
//# sourceMappingURL=1692576961882-create_table_city.js.map