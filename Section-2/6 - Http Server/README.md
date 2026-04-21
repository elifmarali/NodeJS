# 📌 Node.js HTTP Server ve Modüller

## 🚀 Node.js ile HTTP Server Oluşturma

Node.js içerisinde yer alan http modülü sayesinde basit bir web server oluşturabiliriz.

Bir server’ın temel görevi:

Kullanıcıdan (client) gelen isteği (request) almak
Bu isteği işlemek
Uygun bir cevap (response) döndürmektir

## ❓ Neden Bir Server’a İhtiyacımız Var?

Bir server olmadan:

Kullanıcı ile backend arasında iletişim kuramayız
Veri alışverişi yapamayız
Dinamik içerik üretemeyiz

Server sayesinde:

API oluşturabiliriz
Veritabanı işlemleri yapabiliriz
Kullanıcıdan gelen istekleri yönetebiliriz

## 🔄 HTTP Request ve Response Nedir?
### 📥 HTTP Request (İstek)

Client (tarayıcı, mobil uygulama vb.) tarafından server’a gönderilen istektir.

İçeriğinde:

URL (hangi kaynağa erişilecek)
Method (GET, POST, PUT, DELETE)
Headers
Body (veri)

### 📤 HTTP Response (Cevap)

Server’ın request’e verdiği cevaptır.

İçeriğinde:

Status Code (200, 404, 500 vb.)
Headers
Body (veri)


# Module Nedir?

Module, belirli bir işlevi yerine getiren, tekrar kullanılabilir kod parçalarıdır.

Node.js'te her dosya aslında bir modüldür.

## Module Neden ve Ne Zaman Kullanılır?

### Neden?
Kod tekrarını önlemek
Daha düzenli ve okunabilir yapı oluşturmak
Büyük projeleri parçalamak

### Ne zaman?
Aynı işlemi birden fazla yerde kullanacaksan
Kod büyümeye başladıysa
Fonksiyonları ayırmak istiyorsan

## 🧩 Module Türleri
### 1. 📁 Custom Module (Kendi Yazdığımız)

Kendi oluşturduğumuz modüllerdir.

### 2. ⚙️ Node Modules (Built-in)

Node.js ile birlikte gelen hazır modüllerdir.

Bazı önemli modüller:

#### 🖥️ os

İşletim sistemi bilgilerini verir

#### 📂 path

Dosya yollarını yönetir

#### 🌐 url

URL işlemleri yapar

#### 🌍 http

Server oluşturmak için kullanılır

### 3. 📦 NPM Modules

Node Package Manager (npm) üzerinden indirilen modüllerdir.


# 🧠 Özet
Node.js ile server oluşturmak için http modülü kullanılır
Server, request alır ve response döner
Modüller, kodu bölmek ve yönetmek için kullanılır
3 tür modül vardır:
Custom (biz yazarız)
Built-in (Node.js hazır verir)
NPM (dışarıdan yüklenir)