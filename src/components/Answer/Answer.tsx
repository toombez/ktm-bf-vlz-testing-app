import { useId, useState } from "react";
import { IAnswer } from "../../assets/ts/types";
import style from './Answer.module.scss';

interface IAnswerProp {
    answer: IAnswer;
    onChange?: (answer: IAnswer) => void;
}

const Answer = ({ answer, onChange }: IAnswerProp) => {
    const [isSelected, setIsSelected] = useState(false);
    const id = useId();

    const toggle = () => {
        setIsSelected(!isSelected);
    }

    const handleChange = () => {
        toggle();
        if (onChange) onChange(answer);
    }

    return (
        <div className={style.Answer}>
            <input
                id={id}
                type="checkbox"
                checked={isSelected}
                onChange={handleChange}
                className={style.Answer__checkbox}
            />
            <label
                htmlFor={id}
                className={style.Answer__label}
            >
                { answer.label }
            </label>
        </div>
    )
}

export default Answer;
