# Flex Confirm Mail

This is an extended version of the addon "Confirm Mail". You can define "exceptions" for confirmation.

## Exceptional Domains

You can define exceptions of "foreign" domains, via the configuration dialog or the preference `net.nyail.tanabec.confirm-mail.exceptional-domains`. If you put some domains to the list and you try to send a mail to an address listed in the exceptional domains list, then an extra confirmation dialog will be shown. The message of the confirmation dialog can be customized via two preferences: `net.nyail.tanabec.confirm-mail.exceptionalDomain.title` and `net.nyail.tanabec.confirm-mail.exceptionalDomain.message`. It will be useful in a case like: your SMTP server always encrypts your mail automatically but there are some exceptions.

## Exceptional Suffixes

You can define exceptions of attachments, via the configuration dialog or the preference `net.nyail.tanabec.confirm-mail.exceptional-suffixes`. If you put some "extension"s to the list and you try to send a mail with an attachment including a suffix listed in the preference, then an extra confirmation dialog will be shown. The message of the confirmation dialog can be customized via two preferences: `net.nyail.tanabec.confirm-mail.exceptionalSuffix.title` and `net.nyail.tanabec.confirm-mail.exceptionalSuffix.message`. It will be useful in a case like: your SMTP server always encrypts attachments but there are some exceptions.

## How to run automated unittest?

1. Create an XPI including unittest, with the command `make unittest`.
2. Install the built XPI.
3. Open the browser console or the developer tool for the Thunderbird itself.
4. Run `openDialog('chrome://confirm-mail/content/unittest/testRunner.html', '_blank', 'chrome,all')`.

## How to do manual test?

1. Open `sample.eml` with Thunderbird.
2. Hit Ctrl-E to edit the mail as a new message.
3. Try to send it.
