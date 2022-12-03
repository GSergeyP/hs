export interface icons {
  icon: string,
  id?: string,
  classes?: string,
  position: string,         // Параметр может принять left/right
}
export interface attributeTags {
  id?: string,
  classes?: string,
  title?: string,
  
  src?: string,             // Параметр только для img... require('./../../common/img/logo.png')
  alt?: string,             // Параметр только для img
  placeholder?: string,     // Параметр только для input.Text, textarea
  url?: string,             // Параметр только для links
  msg?: string,             // Параметр только для listing
  value?: string,           // Параметр только для textarea
  for?: string,             // Параметр только для label
  icons?: icons,
  onClick?: (e: any) => void;      ////////////////////////////////////
}

