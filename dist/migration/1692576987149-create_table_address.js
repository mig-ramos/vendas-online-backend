"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTableAddress1675388996374 = void 0;
class createTableAddress1675388996374 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE public.address (
                id integer NOT NULL,
                user_id integer NOT NULL,
                complement character varying,
                number integer NOT NULL,
                cep character varying NOT NULL,
                city_id integer NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                primary key (id),
                foreign key (user_id) references public.user(id),
                foreign key (city_id) references public.city(id)
            );
            
            CREATE SEQUENCE public.address_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.address_id_seq OWNED BY public.address.id;
            
            ALTER TABLE ONLY public.address ALTER COLUMN id SET DEFAULT nextval('public.address_id_seq'::regclass);
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            drop table public.address;
        `);
    }
}
exports.createTableAddress1675388996374 = createTableAddress1675388996374;
//# sourceMappingURL=1692576987149-create_table_address.js.map