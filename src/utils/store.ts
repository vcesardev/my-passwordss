import AsyncStorage from "@react-native-async-storage/async-storage";
import { BasePassword } from "../models/Password";
import { User } from "../models/User";

const userKey = "@user_key";

const passwordsKey = "@passwords_key";

export const storeUserData = async (userInfo: User): Promise<void> => {
  try {
    const jsonUser = JSON.stringify(userInfo);
    await AsyncStorage.setItem(userKey, jsonUser);
  } catch (e) {}
};

export const retrieveUserData = async (): Promise<User | null> => {
  try {
    const jsonRetrieveUser = await AsyncStorage.getItem(userKey);
    return jsonRetrieveUser != null ? JSON.parse(jsonRetrieveUser) : null;
  } catch (e) {}
};

export const deleteUserData = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(userKey);
  } catch (e) {}
};

export const storePasswords = async (
  password: BasePassword[]
): Promise<void> => {
  try {
    const jsonPassword = JSON.stringify(password);
    await AsyncStorage.setItem(passwordsKey, jsonPassword);
  } catch (e) {}
};

export const retrievePasswords = async (): Promise<BasePassword[] | null> => {
  try {
    const jsonRetrievePassword = await AsyncStorage.getItem(passwordsKey);
    return jsonRetrievePassword != null
      ? JSON.parse(jsonRetrievePassword)
      : null;
  } catch (e) {}
};

export const removePasswords = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(passwordsKey);
  } catch (e) {}
};
