import PropTypes from "prop-types";
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
        return (
           <ul className={css.btnList}>
            {options.map(option => (
                <li className={css.btnItem} key={option}>
                    <button className={css.btn} type="button" name={option} onClick={onLeaveFeedback}>
                        {option}
                    </button>
                </li>
            ))}    
           </ul>
        );
    };
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    leaveFeedback: PropTypes.func,
};