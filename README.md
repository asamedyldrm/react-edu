# React

- Componentler nasıl oluşturulur ve iç içe yerleştirilir?
- İşaretleme ve stiller nasıl eklenir?
- Veriler nasıl görüntülenir?
- Koşullar ve listeler nasıl oluşturulur?
- Olaylara nasıl yanıt verilir ve ekran nasıl güncellenir?
- Componentler arasında veri nasıl paylaşılır?

---

## Component Oluşturma ve Yerleştirme (Creating and Nesting Components)

*React uygulamaları bileşenlerden* oluşur . Bileşen, kendi mantığına ve görünümüne sahip olan kullanıcı arayüzünün (kullanıcı arayüzü) bir parçasıdır. Bir bileşen bir buton kadar küçük veya bir sayfanın tamamı kadar büyük olabilir.

React bileşenleri, işaretlemeyi döndüren JavaScript işlevleridir:

```jsx
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

Artık `MyButton'`u bir fonksiyona atadığımıza göre başka bir componente yerleştirebiliriz.

```jsx
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```

<MyButton /> ifadesi büyük harfle başlamalı! Bu bir React componentidir. React Component adları her zaman büyük harfle başlamalıdır. HTML etiketleri küçük harf olmalıdır.

**`export default`** anahtar kelimeleri dosyadaki ana bileşeni belirtir. Eğer belirli bir JavaScript sözdizimi hakkında bilgi sahibi değilseniz, MDN ve javascript.info gibi kaynaklara başvurabiliriz.

JSX ile işaretleme yazma

Yukarıdaki syntax’a JSX denir. İsteğe bağlıdır ancak çoğu React projesi kolaylık sağlamak için JSX’i kullanır. Yerel geliştirme için önerilen tüm araçlar kutudan çıktığı gibi JSX’i destekler. 

JSX, HTML'den daha katıdır. <br /> gibi etiketleri kapatmak zorundasınız. Ayrıca, bileşeniniz birden çok JSX etiketi döndüremez. Onları paylaşılan bir üst öğeye sarmalısınız, örneğin <div>...</div> veya boş bir <>...</> sarmalayıcısı kullanmalısınız!

```jsx
function AboutPage() {
  return (
    **<>**
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

JSX’e taşıyacak çok fazla HTML varsa çevrimiçi dönüştürücüler kullanılabilir.

---

## Styles Ekleme

React’da className ile CSS sınıfı belirlenir. HTML’deki class ile aynıdır.

```html
<img className="avatar" />
```

Ardından CSS kurallarını ayrı bir dosyaya yazıyoruz.

```css
/* In your CSS */
.avatar {
  border-radius: 50%;
}
```

---

## Verileri Görüntüleme

JSX, işaretleme dilini JavaScript'e yerleştirmenize olanak tanır. Ayraçlar, kodunuzdan bir değişkeni alıp kullanıcıya görüntüleyebilmeniz için JavaScript'e "geri kaçmanıza" izin verir. Örneğin, bu kullanıcı.ad'ı görüntüleyecektir:

```jsx

return (
  <h1>
    {user.name}
  </h1>
);
```

JSX özelliklerinden de JavaScript'e "geri kaçabilirsiniz", ancak bunun için tırnak yerine ayraçları kullanmanız gerekir. Örneğin, **`className="avatar"`** "avatar" dizesini CSS sınıfı olarak iletecek, ancak **`src={user.imageUrl}`** JavaScript **`user.imageUrl`** değişken değerini okuyacak ve bu değeri src özniteliği olarak iletecektir:

```jsx

return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);
```

JSX ayraçları içine daha karmaşık ifadeler de yerleştirebilirsiniz, örneğin dize birleştirme:

```jsx

return (
  <p>
    {user.firstName + ' ' + user.lastName}
  </p>
);
```

Bu örnek, kullanıcının adını ve soyadını birleştirip paragraf içinde görüntüler.

```jsx
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

Yukarıdaki örnekte, **`style={{}}`** özel bir sözdizimi değil, **`style={}`** JSX ayraçları içindeki düzenli bir **`{}`** nesnesidir. JavaScript değişkenlerine bağlı olarak stil kullanmanız gerektiğinde style özniteliğini kullanabilirsiniz.

---

## Koşul Oluşturma

React'te koşullar yazmak için özel bir sözdizimi yoktur. Bunun yerine, düzenli JavaScript kodu yazarken kullandığınız teknikleri kullanırsınız. Örneğin, JSX'i koşullu olarak içermek için bir if ifadesini kullanabilirsiniz:

```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);

```

Daha kompakt bir kod tercih ediyorsanız, üçlü ? operatörünü kullanabilirsiniz. if'in aksine, JSX içinde çalışır:

```jsx
<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>
```

Else şubesine ihtiyacınız olmadığında, daha kısa bir mantıksal && sözdizimini de kullanabilirsiniz:

```jsx
jsxCopy code
<div>
  {isLoggedIn && <AdminPanel />}
</div>

```

Bu yaklaşımlar, öznitelikleri koşullu olarak belirtmek için de çalışır. Eğer bu JavaScript sözdizimiyle henüz tanışmadıysanız, her zaman if...else kullanarak başlayabilirsiniz.

---

## Liste Oluşturma

Component listelerini render etmek için for döngüsü ve array **`map()`** fonksiyonu gibi JavaScript özelliklerine güveneceksiniz.

Örneğin, bir ürün diziniz olduğunu varsayalım:

```jsx

const products = [
  { title: 'Lahana', id: 1 },
  { title: 'Sarımsak', id: 2 },
  { title: 'Elma', id: 3 },
];
```

Bileşeniniz içinde, ürün dizisini <li> öğeleri dizisine dönüştürmek için **`map()`** fonksiyonunu kullanın:

```jsx

const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

<li>, bir key özniteliğine sahiptir. Bir liste öğesi için, kardeşleri arasında benzersiz olarak tanımlayan bir dize veya sayı geçmelisiniz. Genellikle bir key, verilerinizden gelmelidir, örneğin bir veritabanı kimliği gibi. React, later öğeleri eklediğinizde, sildiğinizde veya yeniden sıraladığınızda ne olduğunu bilmek için anahtarlarınızı kullanır.

```jsx
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
```

---
