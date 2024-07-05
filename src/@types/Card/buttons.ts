import { buttonsForPopup } from "../buttonsForPopup";

export interface ButtonsProps {
  cardBackgroundColor: string;
  mainColor: string;
  accentColor: string;
  backgroundColor: string;
  openModal: (btn: buttonsForPopup) => void;
}
