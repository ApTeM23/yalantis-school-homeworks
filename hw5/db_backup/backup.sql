PGDMP     -    &                {           db_copy    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16594    db_copy    DATABASE     |   CREATE DATABASE db_copy WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Ukraine.1251';
    DROP DATABASE db_copy;
                postgres    false            �            1259    16595 
   migrations    TABLE     �   CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.migrations;
       public         heap    postgres    false            �            1259    16600    migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public          postgres    false    214                       0    0    migrations_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;
          public          postgres    false    215            �            1259    16601    posts    TABLE     �   CREATE TABLE public.posts (
    id integer NOT NULL,
    date_creation timestamp without time zone NOT NULL,
    title character varying(255) NOT NULL,
    text text NOT NULL,
    "userId" integer NOT NULL
);
    DROP TABLE public.posts;
       public         heap    postgres    false            �            1259    16606    post_id_seq    SEQUENCE     �   CREATE SEQUENCE public.post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.post_id_seq;
       public          postgres    false    216                       0    0    post_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.post_id_seq OWNED BY public.posts.id;
          public          postgres    false    217            �            1259    16607    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    age integer NOT NULL,
    info text,
    address jsonb,
    password character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16612    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    218                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    219            o           2604    16613    migrations id    DEFAULT     n   ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);
 <   ALTER TABLE public.migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            p           2604    16614    posts id    DEFAULT     c   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.post_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216            q           2604    16615    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218            	          0    16595 
   migrations 
   TABLE DATA           ;   COPY public.migrations (id, "timestamp", name) FROM stdin;
    public          postgres    false    214   f                 0    16601    posts 
   TABLE DATA           I   COPY public.posts (id, date_creation, title, text, "userId") FROM stdin;
    public          postgres    false    216   �                 0    16607    users 
   TABLE DATA           R   COPY public.users (id, username, email, age, info, address, password) FROM stdin;
    public          postgres    false    218   �                  0    0    migrations_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.migrations_id_seq', 1, false);
          public          postgres    false    215                       0    0    post_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.post_id_seq', 17, true);
          public          postgres    false    217                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 20, true);
          public          postgres    false    219            s           2606    16617 )   migrations PK_8c82d7f526340ab734260ea46be 
   CONSTRAINT     i   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);
 U   ALTER TABLE ONLY public.migrations DROP CONSTRAINT "PK_8c82d7f526340ab734260ea46be";
       public            postgres    false    214            u           2606    16619    posts post_pkey 
   CONSTRAINT     M   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);
 9   ALTER TABLE ONLY public.posts DROP CONSTRAINT post_pkey;
       public            postgres    false    216            w           2606    16621    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    218            y           2606    16623    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    218            z           2606    16624    posts post_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT post_user_id_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE;
 A   ALTER TABLE ONLY public.posts DROP CONSTRAINT post_user_id_fkey;
       public          postgres    false    218    216    3191            	      x������ � �            x������ � �         �   x����   �3|cܚuj͋+u��t�(����w|��\MN@����d<�݌�=iGX�|p����ǃ�n�+���I��Wh?��k��A�)�cF+C�Ҳ؞�ӡ�Ʊh�/y���;?W�wQ<ʥ�$�	���M,     