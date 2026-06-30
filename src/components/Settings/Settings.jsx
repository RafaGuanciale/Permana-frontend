import React from "react";
import { ChangePassword } from "../Settings/ChangePassword";
import { DeleteAccount } from "../Settings/DeleteAccount";

const { useState } = React;

function Settings({ section = "senha", onDeleted }) {
  const [sectionActive, setSectionActive] = useState(section);

  return (
""
  );
}

export default Settings;
