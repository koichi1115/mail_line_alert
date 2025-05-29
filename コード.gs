var query = "subject:【Times CAR】";
var processedLabelName = "Processed"; // 処理済みメールに付けるラベル名

// メールをチェックし条件に該当するメールをLINEに通知する
function getMail() {
  var myThreads = GmailApp.search(query, 0, 10);
  var processedLabel = GmailApp.getUserLabelByName(processedLabelName);
  if (!processedLabel) {
    processedLabel = GmailApp.createLabel(processedLabelName);
  }

  for (var i = 0; i < myThreads.length; i++) {
    var threadLabels = myThreads[i].getLabels();
    var isProcessed = threadLabels.some(function (label) {
      return label.getName() === processedLabelName;
    });

    if (!isProcessed) {
      var myMessages = myThreads[i].getMessages();
      for (var j = 0; j < myMessages.length; j++) {
        var strDate = myMessages[j].getDate();
        var strmsg = Utilities.formatDate(strDate, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss') + "\n";
        strmsg += myMessages[j].getSubject() + "\n";
        strmsg += myMessages[j].getPlainBody().slice(0, 200);

        sendLineMessage(strmsg);
      }

      myThreads[i].addLabel(processedLabel);
    }
  }
}

// LINEにメッセージを送信する
function sendLineMessage(msg) {
  var token = PropertiesService.getScriptProperties().getProperty('LINE_MESSAGING_TOKEN');
  var userId = PropertiesService.getScriptProperties().getProperty('LINE_USER_ID');
  var url = 'https://api.line.me/v2/bot/message/push';

  var headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + token
  };

  var data = {
    'to': userId,
    'messages': [
      {
        'type': 'text',
        'text': msg
      }
    ]
  };

  var options = {
    'method': 'post',
    'headers': headers,
    'payload': JSON.stringify(data)
  };

  UrlFetchApp.fetch(url, options);
}