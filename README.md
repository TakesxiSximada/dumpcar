Database Snapshotを採取する


# 機能リスト

- [ ] db-raw-snapshotが取れる
  - [ ] dbの接続情報を設定できる
    - [ ] ホスト名
    - [ ] ポート番号
    - [ ] データベース名
    - [ ] ユーザ
    - [ ] パスワード
  - [ ] dbに接続しに行くhost名を限定できる
- [ ] db-snapshotが定期的に取れる
  - [ ] 取得年月日が指定できる
- [ ] db-snapshotの取得予約ができる
- [ ] db-dev-snapshotが作成できる
  - [ ] mask対象のテーブルとカラムを指定できる
  - [ ] maskデータの生成方法を指定できる
- [ ] db-snapshotがダウンロードできる
- [ ] db-snapshotを検索できる
- [ ] db-snapshotにタグ付けができる
- [ ] db-snapshotにコメントを付加できる
- [ ] db-snapshotの圧縮形式を指定できる
- [ ] db-snapshotのデータ間引きができる
   - [ ] db-snapshotのデータ間引きのロジックを変更できる
- [ ] リードオンリーなDB以外につないだ場合はエラーする
- [ ] 対象DB
  - [ ] MySQL
  - [ ] MariaDB
  - [ ] PostgreSQL
  - [ ] redis
  - [ ] Mongo
- [ ] 認証


# もっとも簡単な処理フロー

## 登録

1.

## 採集

### db-raw-snapshot

* MySQLに接続する
* チェクテーブルがあることを確認 (SELECTできるか?)
* INERTもしくはUPDATE分を流したときにエラーすること
* mysqldumpでダンプファイルを作成
* xzで圧縮
* ストレージにUpload
* uploadしたパスをDBに保持しておく

### db-dev-snapshot

* MySQLに接続する
* チェクテーブルがあることを確認 (SELECTできるか?)
* INERTもしくはUPDATE分を流したときにエラーすること
* mysqldumpでダンプデータを取得して自分が管理するテンポラリデータベースにリストアする
* マスク処理を行う
* mysqldumpでダンプデータを生成する
* xzで圧縮
* ストレージにUpload
* uploadしたパスをDBに保持しておく

# 用語の定義

db-snapshot
    データベースsnapshotの総称

db-raw-snapshot
    データベースsnapshotでマスク処理されていないもの

db-dev-snapshot
    マスク済みデータベースsnapshot

マスク
    個人情報などの公開できないデータを偽物のデータに置き換える