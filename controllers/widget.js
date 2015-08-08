function setLeftLabel( options ) {
    $.leftButtonLabel.text = options.text || "No Text Set";
    options.eventFunction ? $.leftButtonLabel.addEventListener( "click" , options.eventFunction ) : 0;
}

function setRightLabel( options ) {
    $.rightButtonLabel.text = options.text || "No Text Set";
    options.eventFunction ? $.rightButtonLabel.addEventListener( "click" , options.eventFunction ) : 0;
}

function setTitleLabel( options ) {
    $.titleLabel.text = options.text || "No Text Set";
    options.eventFunction ? $.titleLabel.addEventListener( "click" , options.eventFunction ) : 0;
}

exports.setLeftLabel  = setLeftLabel;
exports.setRightLabel = setRightLabel;
exports.setTitleLabel = setTitleLabel;
