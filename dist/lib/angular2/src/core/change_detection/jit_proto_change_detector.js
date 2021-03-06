'use strict';var change_detection_jit_generator_1 = require('./change_detection_jit_generator');
var proto_change_detector_1 = require('./proto_change_detector');
var JitProtoChangeDetector = (function () {
    function JitProtoChangeDetector(definition) {
        this.definition = definition;
        this._factory = this._createFactory(definition);
    }
    JitProtoChangeDetector.isSupported = function () { return true; };
    JitProtoChangeDetector.prototype.instantiate = function (dispatcher) { return this._factory(dispatcher); };
    JitProtoChangeDetector.prototype._createFactory = function (definition) {
        var propertyBindingRecords = proto_change_detector_1.createPropertyRecords(definition);
        var eventBindingRecords = proto_change_detector_1.createEventRecords(definition);
        var propertyBindingTargets = this.definition.bindingRecords.map(function (b) { return b.target; });
        return new change_detection_jit_generator_1.ChangeDetectorJITGenerator(definition.id, definition.strategy, propertyBindingRecords, propertyBindingTargets, eventBindingRecords, this.definition.directiveRecords, this.definition.genConfig)
            .generate();
    };
    return JitProtoChangeDetector;
})();
exports.JitProtoChangeDetector = JitProtoChangeDetector;
//# sourceMappingURL=jit_proto_change_detector.js.map