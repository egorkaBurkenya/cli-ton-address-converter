# Конвертер Адресов TON

Простая консольная утилита для конвертации адресов кошельков TON (The Open Network) в различные форматы.

## Возможности

- Конвертация адресов TON в несколько форматов: Raw, User-Friendly (Base64), Bounceable, Non-Bounceable.
- Дополнительные форматы: Testnet Only, Bounceable Testnet, Non-Bounceable Testnet, URL Safe.
- Опция вывода адресов в верхнем или нижнем регистре.
- Удобные сокращенные команды для конвертации в определенные форматы.

## Установка

### Требования

- Node.js (рекомендуется v14 или выше)
- npm (обычно устанавливается вместе с Node.js)

### Глобальная Установка (Рекомендуется)

Вы можете установить `cli-ton-address-converter` глобально с помощью npm:

```bash
npm install -g cli-ton-address-converter
```

После установки команда `ton-addr` будет доступна в вашем терминале.

*(Примечание: Если вы разрабатываете локально или клонировали репозиторий, вы можете связать пакет глобально из корневой директории проекта: `npm link`)*

## Использование

### Основные команды

Для отображения всех доступных форматов адреса:

```bash
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
```

Для отображения определенного формата:

```bash
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --format raw
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --format user-friendly
# и т.д.
```

### Быстрый доступ к форматам

Для более быстрого доступа к определенному формату:

```bash
ton-addr raw EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
ton-addr user-friendly EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
ton-addr bounceable EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
ton-addr non-bounceable EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
```

### Опции форматирования

Вывести все адреса в верхнем регистре:

```bash
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --uppercase
```

Вывести все адреса в нижнем регистре:

```bash
ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --lowercase
```

Вывести определенный формат в верхнем/нижнем регистре:

```bash
ton-addr raw EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --uppercase
ton-addr user-friendly EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_ --lowercase
```
*(Примечание: Для формата RAW, преобразование регистра применяется только к шестнадцатеричной части адреса, например, `0:ABCDEF...`)*

## Поддерживаемые форматы

- **Raw**: Шестнадцатеричный формат (например, `0:ab12...ef`)
- **User Friendly**: Стандартный пользовательский формат в кодировке Base64 (по умолчанию bounceable)
- **Bounceable**: Адрес с установленным флагом bounceable
- **Non Bounceable**: Адрес со снятым флагом bounceable
- **Testnet Only**: Адрес, предназначенный только для тестовой сети
- **Bounceable Testnet**: Bounceable адрес для тестовой сети
- **Non Bounceable Testnet**: Non-bounceable адрес для тестовой сети
- **URL Safe**: Формат Base64 с использованием URL-безопасных символов (`_` и `-`)

## Пример вывода

```bash
$ ton-addr EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_

TON Address Conversion Results:
================================
Input: EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_

Raw                      : 0:521e1c5deced8db6c40a65f288cb019592cd7419a562741e47e95278c3c019c4
User Friendly            : EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
Bounceable               : EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
Non Bounceable           : UQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxLy6
Testnet Only             : kQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxFr1
Bounceable Testnet       : kQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxFr1
Non Bounceable Testnet   : 0QBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxAcw
Url Safe                 : EQBSHhxd7O2NtsQKZfKIywGVks10GaVidB5H6VJ4w8AZxOF_
```

## Справка

Для получения полного списка команд и опций:

```bash
ton-addr --help
```

## Системные требования

- Node.js (v14+)
- npm

Совместимо с macOS, Linux и Windows.

## Зависимости

- `@ton/ton`: Основная библиотека для взаимодействия с блокчейном TON.
- `commander`: Фреймворк для создания интерфейсов командной строки.
