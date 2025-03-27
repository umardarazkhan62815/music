import React from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LanguageModal = ({ visible, onClose }) => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", name: t("english"), nativeName: "English" },
    { code: "ur", name: t("urdu"), nativeName: "বাংলা" },
    { code: "bn", name: t("bengali"), nativeName: "اردو" },
  ];

  const changeLanguage = (val) => {
    i18n.changeLanguage(val);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Language</Text>

          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              style={styles.languageButton}
              onPress={() => changeLanguage(lang?.code)}
            >
              <Text style={styles.languageText}>{lang.name}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  languageButton: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  languageText: {
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
  },
  closeButtonText: {
    color: "#007AFF",
    fontSize: 16,
  },
});

export default LanguageModal;
