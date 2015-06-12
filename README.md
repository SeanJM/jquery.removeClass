# jQuery Remove Class
A plugin for replacing jQuery's current jQuery.fn.removeClass with one which takes multiple arguments including regular expressions

### Classic Usage

    $(element).removeClass('className, className2, className3');

### Multiple arguments

    $(element).removeClass('className', 'className2', 'className3');

### RegExp

    $(element).removeClass(/className(|[0-9]+)/g);

### Flexibility (RegExp with classic usage and multiple arguments)

    $(element).removeClass(/className(|[0-9]+)/g, 'anotherClass, anotherClass', 'yetAnother');
