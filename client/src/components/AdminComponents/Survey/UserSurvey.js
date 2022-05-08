import React, {useCallback} from "react";
import * as Survey from "survey-react";

import "survey-react/modern.css";
import {DepartmentsContext, IsAdminContext, IsAuthenticateContext} from "../../../App";
import {useHistory} from "react-router-dom";

Survey.StylesManager.applyTheme("modern");

const UserSurvey = targetElement => {
    const { departments, setDepartments } = React.useContext(DepartmentsContext);
    const history = useHistory();
    const json = {
        "title": "סקר שביעות רצון",
        "showProgressBar": "top",
        "pages": [
            {
                "questions": [
                    {
                        "type": "dropdown",
                        "name": "car",
                        "title": "באיזה מחלקה/מרפאה ביקרת?",
                        "colCount": 0,
                        "hasNone": true,
                        "choices": departments.map(item => item.name)
                    },
                    {
                        "type": "matrix",
                        "name": "Quality",
                        "title": "מלאו כמה אתם מסכימים עם כל משפט",
                        "rightIndent": "50",
                        "columns": [
                            {
                                "value": 1,
                                "text": "במידה רבה מאוד"
                            },
                            {
                                "value": 2,
                                "text": "במידה רבה"
                            },
                            {
                                "value": 3,
                                "text": "במידה בינונית"
                            },
                            {
                                "value": 4,
                                "text": "במידה מועטה"
                            },
                            {
                                "value": 5,
                                "text": "בכלל לא"
                            },
                            {
                                "value": 6,
                                "text": "לא רלוונטי"
                            }
                        ],
                        "rows": [
                            {
                                "value": "affordable",
                                "text": "באיזו מידה הרגשת שהאחיות התייחסו אליך באדיבות ובכבוד?"
                            },
                            {
                                "value": "does what it claims",
                                "text": "באיזו מידה האחיות הקשיבו לך והתייחסו לשאלות ולחששות שלך?"
                            },
                            {
                                "value": "better then others",
                                "text": "באיזו מידה ההסברים שקיבלת במהלך הביקור מהאחיות היו ברורים ומובנים לך?"
                            },
                            {
                                "value": "easy to use",
                                "text": "באיזו מידה הרגשת שהרופאים התייחסו אליך באדיבות ובכבוד?"
                            },
                            {
                                "value": "easy to use",
                                "text": "באיזו מידה הרופאים הקשיבו לך והתייחסו לשאלות ולחששות שלך?"
                            },
                            {
                                "value": "easy to use",
                                "text": "באיזו מידה ההסברים שקיבלת במהלך הביקור מהרופאים היו ברורים ומובנים לך?"
                            }
                        ]
                    },
                    {
                        "type": "rating",
                        "name": "nps_score",
                        "title": "אם חלילה יהיה צורך, האם תמליץ/י לחברים ולקרובי משפחה להגיע לבית החולים? דרג/י על סולם 1 עד 5 ,כאשר 1 פירושו בטוח שלא תמליץ/י ו- 5 פירושו בטוח שכן תמליץ/י",
                        "rateMin": 1,
                        "rateMax": 5,
                    },
                    {
                        "type": "comment",
                        "name": "suggestions",
                        "title": "האם יש לך הערות נוספות או הצעות לשיפור?"
                    }
                ]
            }
        ]
    };

    const survey = new Survey.Model(json);
    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        alert(results);
        history.push("/usersHomePage");
    }, []);
    survey.onComplete.add(alertResults);

    return (
        <div>
            <Survey.Survey model={survey} />
        </div>
    );
};


export default UserSurvey;
