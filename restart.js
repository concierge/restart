exports.run = function (api, event) {
    let msg = $$`Restart portal reference ${exports.platform.packageInfo.name}`;
    api.sendMessage(msg, event.thread_id);
    this.shutdown(StatusFlag.ShutdownShouldRestart);
    return true;
};
