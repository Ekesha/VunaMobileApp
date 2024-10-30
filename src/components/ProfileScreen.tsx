import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";
import { ScrollView, StackLayout, Label, GridLayout, Button, TextField } from "@nativescript/core";
import { NavigationBar } from "./NavigationBar";

type ProfileScreenProps = {
  navigation: FrameNavigationProp<MainStackParamList, "Profile">,
  route: { params?: { userData: any } }
};

export function ProfileScreen({ navigation, route }: ProfileScreenProps) {
  const [userData, setUserData] = useState(route.params?.userData || {
    displayName: '',
    emailAddress: '',
    mobileNo: '',
    accountNo: '',
  });

  useEffect(() => {
    if (route.params?.userData) {
      setUserData(route.params.userData);
    }
  }, [route.params?.userData]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    displayName: userData.displayName,
    emailAddress: userData.emailAddress,
    mobileNo: userData.mobileNo,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Here you would typically make an API call to update the user data
    // For now, we'll just update the local state
    setIsEditing(false);
    // Update the global userData state here if needed
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUserData({
      displayName: userData.displayName,
      emailAddress: userData.emailAddress,
      mobileNo: userData.mobileNo,
    });
  };

  const handleLogout = () => {
    global.token = null;
    global.userData = null;
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <gridLayout rows="*, auto">
      <scrollView row={0}>
        <stackLayout style={styles.container}>
          <label text="Profile" style={styles.headerText} />
          
          <gridLayout style={styles.card} rows="auto, auto, auto, auto, auto" columns="auto, *">
            <label row={0} col={0} style={styles.label} text="Name:" />
            {isEditing ? (
              <textField row={0} col={1} style={styles.input} text={editedUserData.displayName} 
                onTextChange={(args) => setEditedUserData({...editedUserData, displayName: args.object.text})} />
            ) : (
              <label row={0} col={1} style={styles.value} text={userData.displayName} />
            )}
            
            <label row={1} col={0} style={styles.label} text="Email:" />
            {isEditing ? (
              <textField row={1} col={1} style={styles.input} text={editedUserData.emailAddress}
                onTextChange={(args) => setEditedUserData({...editedUserData, emailAddress: args.object.text})} />
            ) : (
              <label row={1} col={1} style={styles.value} text={userData.emailAddress} />
            )}
            
            <label row={2} col={0} style={styles.label} text="Mobile:" />
            {isEditing ? (
              <textField row={2} col={1} style={styles.input} text={editedUserData.mobileNo}
                onTextChange={(args) => setEditedUserData({...editedUserData, mobileNo: args.object.text})} />
            ) : (
              <label row={2} col={1} style={styles.value} text={userData.mobileNo} />
            )}
            
            <label row={3} col={0} style={styles.label} text="Account No:" />
            <label row={3} col={1} style={styles.value} text={userData.accountNo} />
          </gridLayout>

          {isEditing ? (
            <stackLayout orientation="horizontal" style={styles.buttonContainer}>
              <button style={styles.saveButton} text="Save" onTap={handleSave} />
              <button style={styles.cancelButton} text="Cancel" onTap={handleCancel} />
            </stackLayout>
          ) : (
            <button style={styles.editButton} text="Edit Profile" onTap={handleEdit} />
          )}

          <button style={styles.logoutButton} text="Logout" onTap={handleLogout} />
        </stackLayout>
      </scrollView>
      <NavigationBar row={1} activeRoute="Profile" navigation={navigation} userData={userData} />
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F5F5F5",
    paddingBottom: 80,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212121",
    textAlignment: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: "#757575",
    marginRight: 10,
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    color: "#212121",
    fontWeight: "bold",
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: "#FF7043",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  navBar: {
    backgroundColor: "#FFFFFF",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#E6F3FF",
  },
  navItem: {
    backgroundColor: "transparent",
    color: "#4A90E2",
    fontSize: 10,
    height: "100%",
    padding: 0,
    textAlignment: "center",
  },
  activeNavItem: {
    color: "#FFFFFF",
    fontWeight: "bold",
    backgroundColor: "#FF7043", // Changed to orange
    borderRadius: 5,
    margin: 5,
  },
  input: {
    fontSize: 16,
    color: "#212121",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 5,
    padding: 5,
  },
  editButton: {
    backgroundColor: "#4A90E2",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#F44336",
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    borderRadius: 5,
    padding: 10,
  },
  buttonContainer: {
    justifyContent: "center",
    marginTop: 20,
  },
});
