exports.run = (api, event) => {
    api.sendMessage($$`Restart portal reference ${exports.platform.packageInfo.name}`, event.thread_id);
    exports.platform.shutdown(StatusFlag.ShutdownShouldRestart);
    return true;
};
