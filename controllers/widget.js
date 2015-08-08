function setLeftLabel( options ) {
    $.leftButtonLabel.text = options.text || "No Text Set";
    option.eventFunction ? $.leftButtonLabel.addEventListener( "click" , options.eventFunction ) : 0;
}

function setRightLabel( options ) {
    $.rightButtonLabel.text = options.text || "No Text Set";
    option.eventFunction ? $.rightButtonLabel.addEventListener( "click" , options.eventFunction ) : 0;
}

function setTitleLabel( options ) {
    $.titleLabel.text = options.text || "No Text Set";
    option.eventFunction ? $.titleLabel.addEventListener( "click" , options.eventFunction ) : 0;
}

exports.setLeftLabel  = setLeftLabel;
exports.setRightLabel = setRightLabel;
exports.setTitleLabel = setTitleLabel;
