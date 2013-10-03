var file_test = {};

(function(){
    file_test.setSampleFileUrl = function(){
        setFileUrl("download", $("#file_name").val(), $("#content").val());
    };
    file_test.setFileUrl = function(id, fname, content) {
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(TEMPORARY, 1024*1024, function(fileSystem){
            // ファイル新規作成（上書き）
            fileSystem.root.getFile(fname, {create: true, exclusive: false}, function(fileEntry){
                // ファイル書き込み
                fileEntry.createWriter(function(fileWriter){
                    var blob = new Blob([ content ], { "type" : "text/plain" });
                    fileWriter.write(blob);
                    // ファイル書き込み成功イベント
                    fileWriter.onwriteend = function(e){
                        alert("ファイル書き込み成功");
                    };
                    // ファイル書き込み失敗イベント
                    fileWriter.onerror = function(e){
                        alert("ファイル書き込み失敗");
                    };
                });

                // リンクへ紐付ける
                $("#" + id).attr("href", fileEntry.toURL());
            }, function(error){
                alert("error.code=" + error.code);
            });
        });
    }
})();