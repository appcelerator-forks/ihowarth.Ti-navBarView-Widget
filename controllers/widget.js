function setLeftLabel( options ) {
    $.leftButtonLabel.text = options.text || "No Text Set";
    $.leftButtonLabel.addEventListener( "click" , options.eventFunction );
}

function setRightLabel( options ) {
    $.rightButtonLabel.text = options.text || "No Text Set";
    $.rightButtonLabel.addEventListener( "click" , options.eventFunction );
}

function setTitleLabel( options ) {
    $.titleLabel.text = options.text || "No Text Set";
    $.titleLabel.addEventListener( "click" , options.eventFunction );
}

exports.setLeftLabel  = setLeftLabel;
exports.setRightLabel = setRightLabel;
exports.setTitleLabel = setTitleLabel;