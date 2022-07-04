# Dnd Todos Back

- コメントを受け取って返すだけのモックサーバー

## 実行環境

- Node.js: v16.18.0
- Fastify(TypeScript)

## 実行手順

1. 環境変数を設定します。

```
cp .env.example .env
```

2. パッケージをインストールします。

```
yarn
```

3. データベースのマイグレーションを行います。

```
npx prisma migrate dev
```

4. アプリを立ち上げます。

```
yarn dev
```
