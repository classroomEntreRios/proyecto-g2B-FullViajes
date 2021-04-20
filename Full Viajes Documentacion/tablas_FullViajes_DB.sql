CREATE TABLE FullViajes.dbo.Usuario (
	id_usuario bigint IDENTITY(0,1) NOT NULL,
	nickname varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	email varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	password varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	rol tinyint NOT NULL,
	user_foto varchar(250) COLLATE Modern_Spanish_CI_AS NOT NULL,
	user_descripcion varchar(300) COLLATE Modern_Spanish_CI_AS NOT NULL,
	CONSTRAINT Usuario_PK PRIMARY KEY (id_usuario)
) GO;

CREATE TABLE FullViajes.dbo.Topicos (
	id_topics bigint IDENTITY(0,1) NOT NULL,
	id_usuario bigint NOT NULL,
	titulo varchar(200) COLLATE Modern_Spanish_CI_AS NOT NULL,
	contenido text COLLATE Modern_Spanish_CI_AS NOT NULL,
	fecha_creacion datetime DEFAULT getdate() NOT NULL,
	fecha_modificacion datetime NULL,
	CONSTRAINT Topicos_PK PRIMARY KEY (id_topics)
) GO;


ALTER TABLE FullViajes.dbo.Topicos ADD CONSTRAINT Topicos_FK FOREIGN KEY (id_usuario) REFERENCES FullViajes.dbo.Usuario(id_usuario) GO;

CREATE TABLE FullViajes.dbo.Respuestas (
	id_respuesta bigint IDENTITY(0,1) NOT NULL,
	id_topics bigint NOT NULL,
	id_usuario bigint NOT NULL,
	contenido text COLLATE Modern_Spanish_CI_AS NOT NULL,
	fecha_creacion datetime DEFAULT getdate() NOT NULL,
	fecha_modificacion datetime NULL,
	CONSTRAINT Respuestas_PK PRIMARY KEY (id_respuesta)
) GO;


ALTER TABLE FullViajes.dbo.Respuestas ADD CONSTRAINT RespuestasT_FK FOREIGN KEY (id_topics) REFERENCES FullViajes.dbo.Topicos(id_topics) GO
ALTER TABLE FullViajes.dbo.Respuestas ADD CONSTRAINT Respuestas_FK FOREIGN KEY (id_usuario) REFERENCES FullViajes.dbo.Usuario(id_usuario) GO;

CREATE TABLE FullViajes.dbo.Ciudad (
	id_ciudad bigint IDENTITY(0,1) NOT NULL,
	nombre varchar(200) COLLATE Modern_Spanish_CI_AS NOT NULL,
	cp varchar(10) COLLATE Modern_Spanish_CI_AS NOT NULL,
	coordenadas varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	itinerario binary DEFAULT 0 NOT NULL,
	CONSTRAINT Ciudad_PK PRIMARY KEY (id_ciudad)
) GO;

CREATE TABLE FullViajes.dbo.Alojamiento (
	id_alojamiento bigint IDENTITY(0,1) NOT NULL,
	id_ciudad bigint NOT NULL,
	nombre varchar(250) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion text COLLATE Modern_Spanish_CI_AS NOT NULL,
	telefono varchar(100) COLLATE Modern_Spanish_CI_AS NULL,
	direccion varchar(200) COLLATE Modern_Spanish_CI_AS NOT NULL,
	itinerario binary NOT NULL,
	CONSTRAINT Alojamiento_PK PRIMARY KEY (id_alojamiento)
) GO;


ALTER TABLE FullViajes.dbo.Alojamiento ADD CONSTRAINT Alojamiento_FK FOREIGN KEY (id_ciudad) REFERENCES FullViajes.dbo.Ciudad(id_ciudad) GO;

CREATE TABLE FullViajes.dbo.Atracciones (
	id_atraccion bigint IDENTITY(0,1) NOT NULL,
	id_ciudad bigint NOT NULL,
	nombre varchar(250) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion text COLLATE Modern_Spanish_CI_AS NULL,
	direccion varchar(300) COLLATE Modern_Spanish_CI_AS NOT NULL,
	itinerario binary NOT NULL,
	CONSTRAINT Atracciones_PK PRIMARY KEY (id_atraccion)
) GO;


ALTER TABLE FullViajes.dbo.Atracciones ADD CONSTRAINT Atracciones_FK FOREIGN KEY (id_ciudad) REFERENCES FullViajes.dbo.Ciudad(id_ciudad) GO;

CREATE TABLE FullViajes.dbo.Clima (
	id_clima bigint IDENTITY(0,1) NOT NULL,
	id_ciudad bigint NOT NULL,
	fecha date NOT NULL,
	estado varchar(100) COLLATE Modern_Spanish_CI_AS NOT NULL,
	tempmax smallint NOT NULL,
	tempmin smallint NOT NULL,
	CONSTRAINT Clima_PK PRIMARY KEY (id_clima)
) GO;

ALTER TABLE FullViajes.dbo.Clima ADD CONSTRAINT Clima_FK FOREIGN KEY (id_ciudad) REFERENCES FullViajes.dbo.Ciudad(id_ciudad) GO;

CREATE TABLE FullViajes.dbo.Imagen (
	id_imagen bigint IDENTITY(0,1) NOT NULL,
	id_ciudad bigint NOT NULL,
	url varchar(300) COLLATE Modern_Spanish_CI_AS NOT NULL,
	descripcion varchar(300) COLLATE Modern_Spanish_CI_AS NULL,
	seccion smallint NOT NULL,
	CONSTRAINT Imagen_PK PRIMARY KEY (id_imagen)
) GO;

ALTER TABLE FullViajes.dbo.Imagen ADD CONSTRAINT Imagen_FK FOREIGN KEY (id_ciudad) REFERENCES FullViajes.dbo.Ciudad(id_ciudad) GO;