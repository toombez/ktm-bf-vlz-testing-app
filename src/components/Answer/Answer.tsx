import { useId, useState } from "react";
import { IAnswer } from "../../assets/ts/types";
import style from './Answer.module.scss';

interface IAnswerProp {
    answer: IAnswer;
    onChange?: (answer: IAnswer) => void;
    className?: string;
}

const Answer = ({ answer, onChange, className }: IAnswerProp) => {
    const [isSelected, setIsSelected] = useState(false);
    const id = useId();

    const toggle = () => {
        setIsSelected(!isSelected);
    }

    const handleChange = () => {
        toggle();
        if (onChange) onChange(answer);
    }

    const classNames = [style.Answer, className]
        .filter(className => className !== undefined)
        .join(' ');

    return (
        <div className={classNames.length > 0 ? classNames : undefined}>
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
