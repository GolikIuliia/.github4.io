const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    thirdNameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Юлия",
            "id_2": "Татьяна",
            "id_3": "Анастасия",
            "id_4": "Ирина",
            "id_5": "Дарья",
            "id_6": "Полина",
            "id_7": "Мария",
            "id_8": "Галина",
            "id_9": "Надежда",
            "id_10": "Вера"
        }
    }`,
    profesMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Элекстрик",
            "id_2": "Сантехник",
            "id_3": "Стиптизёр",
            "id_4": "Пилот",
            "id_5": "Строитель",
            "id_6": "Программист",
            "id_7": "Таксист",
            "id_8": "Дантист",
            "id_9": "Бодибилдер",
            "id_10": "Безработный"
        }
    }`,
    profesFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Учитель",
            "id_3": "Дизайнер",
            "id_4": "Париксахер",
            "id_5": "Косметолог",
            "id_6": "Продавец",
            "id_7": "Домохозяйка",
            "id_8": "Модель",
            "id_9": "Повар",
            "id_10": "Проститутка"
        }
    }`,
    mounthDayJson: `{
        "count": 12,
        "list": {     
            "id_1": "Январь",
            "id_2": "Февраль",
            "id_3": "Март",
            "id_4": "Апрель",
            "id_5": "Май",
            "id_6": "Июнь",
            "id_7": "Июль",
            "id_8": "Август",
            "id_9": "Сентябрь",
            "id_10": "Октябрь",
            "id_11": "Ноябрь",
            "id_12": "Декабрь"
        },
        "days": {
            "id_1": 31,
            "id_2": 28,
            "id_3": 31,
            "id_4": 30,
            "id_5": 31,
            "id_6": 30,
            "id_7": 31,
            "id_8": 31,
            "id_9": 30,
            "id_10": 31,
            "id_11": 30,
            "id_12": 31
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),    

    randomValue: function (json) {
       
        const obj = JSON.parse(json);
        var randomValueV = this.randomIntNumber(obj.count, 1);
        const prop = `id_${randomValueV}`;  // this = personGenerator
        return obj.list[prop];        
    },

    randomMounth: function (json) {
       
        const obj = JSON.parse(json);
        var randomValueV = this.randomIntNumber(obj.count, 1);        
        const prop = `id_${randomValueV}`;  
        var randomDays = this.randomIntNumber(obj.days[prop], 1);
        return [obj.list[prop], randomDays];        
    },
    
    randomGender: function() {            
            return this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        },   

    randombirthYear: function() {
        return this.randomIntNumber(2004, 1982)
    },
    randombirthMonth: function() {
        return this.randomIntNumber(12, 1)
    },
    randombirthDay: function() {
        return this.randomIntNumber(31, 1)
    },

    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        }
        else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
    
    randomSurName: function() {        
        if (this.person.gender == this.GENDER_MALE) {
           return this.randomValue(this.surnameJson);
        }
        else
           return this.randomValue(this.surnameJson) + 'a';
    },

    randomThirdName: function() {        
        if (this.person.gender == this.GENDER_MALE) {
           return this.randomValue(this.surnameJson) + 'ович';
        }
        else
           return this.randomValue(this.surnameJson) + 'овна';
    },

    randomProfes: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.profesMaleJson);
        }
        else {
            return this.randomValue(this.profesFemaleJson);
        }
    },
    
    getPerson: function () {
        let month = this.randomMounth(this.mounthDayJson);
        let day = month[1] + "." + month[0] + "." + this.randombirthYear();
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        this.person.thirdName = this.randomThirdName();
        this.person.profes = this.randomProfes();
        this.person.day = day;
        return this.person;
    }
};