export interface ImportForm {
  form: string;
  label: string;
  key: string;
  type: string;
  required?: string;
  memo?: string;
}

export interface FormItem {
    label: string;
    type: string;
    options?: string;
    optionParams?: string;
    required?: boolean;
    editable: Boolean;
    onSelect?: string;
    onBlur?: string;
    template?: string;
    multiple?: boolean;
}

export class OptionType {
  dictLabel: string;
  dictValue: string;
  constructor(dictLabel: string, dictValue: string) {
    this.dictLabel = dictLabel;
    this.dictValue = dictValue;
  }
  toString(): string {
    return `{ dictLabel: ${this.dictLabel}, dictValue: ${this.dictValue} }`;
  }
}