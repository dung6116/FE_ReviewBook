// Doi tuong validator
function Validator(options) {

    var selectorRules = {};

    //Ham thuc hien validate
    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage;

        //lay ra cac rules cua selector
        var rules = selectorRules[rule.selector];
        
        //Lap qua tung rule va kiem tra
        //Neu co loi thi dung viec kiem tra
        for (var i=0; i<rules.length; ++i) {
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }
        
        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }

        return !errorMessage;
    }

    //lay element cua form can validate
    var formElement = document.querySelector(options.form);

    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            
            if (isFormValid) {
                if (typeof options.onSubmit ==='function'){
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function (values, input){
                        return (values[input.name] = input.value) && values;
                    }, {});
                    
                    options.onSubmit(formValues);
                }
            }
        }

        options.rules.forEach(function (rule) {

            //Luu lai cac rules cho moi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            

            var inputElement = formElement.querySelector(rule.selector);
            
            if (inputElement) {
                //xu ly TH blur khoi input
                inputElement.onblur = function () {
                    validate(inputElement, rule)
                }

                //xu ly moi khi nguoi dung nhap
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }
}

//Dinh nghia rules
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này';
        
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : 'Nhập lại mật khẩu không chính xác';
        
        }
    }
}