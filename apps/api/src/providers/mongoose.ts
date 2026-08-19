import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;

let connectionPromise: Promise<typeof mongoose> | null = null;

/**
 * Conecta a MongoDB. Reutiliza la conexión existente si ya está activa,
 * y evita conexiones duplicadas si algo llama a connect() más de una vez
 * mientras la primera conexión todavía está en curso.
 */
const connect = async (): Promise<typeof mongoose> => {
  if (connectionPromise) {
    return connectionPromise;
  }

  if (mongoose.connection.readyState === 1) {
    try {
      await mongoose.connection.db!.admin().ping();
      return mongoose;
    } catch (err) {
      console.warn("Conexión de MongoDB perdida, reconectando...", err);
      await mongoose.connection.close();
      connectionPromise = null;
      // sigue abajo para reconectar
    }
  }

  if (!uri) {
    throw new Error("Falta MONGODB_URI en el .env");
  }

  connectionPromise = mongoose
    .connect(uri, {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      retryWrites: true,
      retryReads: true,
    })
    .then((conn) => {
      console.log("MongoDB conectado");
      return conn;
    })
    .catch((err) => {
      console.error("Error al conectar a MongoDB", err);
      connectionPromise = null;
      throw err;
    });

  return connectionPromise;
};

export { connect };
