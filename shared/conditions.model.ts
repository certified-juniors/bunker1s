export default interface Conditions {
    cataclysm?: string;
    when_outside?: string; // Выход на поверхность: 10 лет
    pos_to_find_someone?: string; // Вероятность найти других выживших людей: 10%
    destruction?: string; // Разрушенность поверхности: 10%
    size?: string; // Размер бункера: 100 кв.м.
    places?: number; // Количество мест в бункере: 3
    specrooms?: string[]; // [ "Кухня", "Спальня", "Склад" ]
    added?: string[]; // Текст, добавляемый к описанию бункера спецкартами
};