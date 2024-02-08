export interface HeadingProps {
	title: string;
	subtitle?: string;
}

export interface InputProps {
	type: string;
	name: string;
	autocomplete: string;
	placeholder: string;
	id?: string;
	marginY: string;
	width: string;
}

export interface CustomButtonProps {
	title: string;
	func?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ProductButtonProps {
	title: string;
}

export interface QuestionAnswerProps {
	question: string;
	answer: string;
}

export interface CustomCheckboxProps {
	title: string;
}
