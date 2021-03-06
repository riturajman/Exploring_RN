import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageURI TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lan REAL NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject();
        }
      );
    });
  });
  return promise;
};

export const insertPlace = (title, imageUri, address, lat, lan) => {
  const insertPromise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO places (title, imageURI, address, lat, lan) VALUES (?,?,?,?,?);`,
        [title, imageUri, address, lat, lan],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return insertPromise;
};

export const fetchPlace = () => {
  const fetchPromise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return fetchPromise;
};
