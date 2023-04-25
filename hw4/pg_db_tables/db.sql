--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

-- Started on 2023-04-19 21:21:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 217 (class 1259 OID 16559)
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    date_creation timestamp without time zone NOT NULL,
    title character varying(255) NOT NULL,
    text text NOT NULL,
    "userId" integer NOT NULL
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16558)
-- Name: post_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_id_seq OWNER TO postgres;

--
-- TOC entry 3338 (class 0 OID 0)
-- Dependencies: 216
-- Name: post_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.post_id_seq OWNED BY public.posts.id;


--
-- TOC entry 215 (class 1259 OID 16548)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    age integer NOT NULL,
    info text,
    address jsonb
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16547)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- TOC entry 3339 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 3179 (class 2604 OID 16562)
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);


--
-- TOC entry 3178 (class 2604 OID 16551)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3332 (class 0 OID 16559)
-- Dependencies: 217
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.posts VALUES (1, '2022-01-01 10:00:00', 'My First Post', 'This is my first post!', 1);
INSERT INTO public.posts VALUES (2, '2022-01-02 11:00:00', 'My Second Post', 'This is my second post!', 1);
INSERT INTO public.posts VALUES (3, '2022-01-03 12:00:00', 'Hello World', 'Hello, world!', 2);
INSERT INTO public.posts VALUES (4, '2022-01-04 13:00:00', 'My Third Post', 'This is my third post!', 1);
INSERT INTO public.posts VALUES (5, '2022-01-05 14:00:00', 'Another Post', 'This is another post!', 3);
INSERT INTO public.posts VALUES (6, '2023-04-18 17:35:52.793', 'First post by JaneDoe', 'This is my first post!', 2);
INSERT INTO public.posts VALUES (7, '2023-04-18 17:52:07.959', 'Second post by JaneDoe', 'This is my second post!', 2);
INSERT INTO public.posts VALUES (8, '2023-04-19 19:32:47.288', 'New POst', 'Text', 2);


--
-- TOC entry 3330 (class 0 OID 16548)
-- Dependencies: 215
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users VALUES (2, 'JaneDoe', 'janedoe@example.com', 30, NULL, '{"city": "San Francisco", "street": "456 Elm St"}');
INSERT INTO public.users VALUES (3, 'BobSmith', 'bobsmith@example.com', 40, 'Marketing Manager', '{"city": "Chicago", "street": "789 Oak St"}');
INSERT INTO public.users VALUES (4, 'sadovenk0', 'monstr14ekss@gmail.com', 18, NULL, '{"city": "Dnipro", "street": "Titova 36"}');
INSERT INTO public.users VALUES (1, 'updated', 'test@gmail.com', 10, NULL, '{"city": "New York", "street": "123 Main St"}');
INSERT INTO public.users VALUES (10, 'Ширін', 'example@gmail.com', 18, NULL, '{"city": "Dnipro", "street": "Titova 36"}');


--
-- TOC entry 3340 (class 0 OID 0)
-- Dependencies: 216
-- Name: post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.post_id_seq', 8, true);


--
-- TOC entry 3341 (class 0 OID 0)
-- Dependencies: 214
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 10, true);


--
-- TOC entry 3185 (class 2606 OID 16566)
-- Name: posts post_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


--
-- TOC entry 3181 (class 2606 OID 16555)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3183 (class 2606 OID 16557)
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- TOC entry 3186 (class 2606 OID 16567)
-- Name: posts post_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT post_user_id_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;


-- Completed on 2023-04-19 21:21:18

--
-- PostgreSQL database dump complete
--

