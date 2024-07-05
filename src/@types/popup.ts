import { buttonsForPopup } from "./buttonsForPopup";

export interface PopupProps {
  nameBtn: buttonsForPopup;
  companyId: string;
  active: boolean;
  closePopup: () => void;
}
