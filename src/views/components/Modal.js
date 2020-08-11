import Carousel from "./Carousel.js";

export default class Modal {
  $target = null;
  $modal = null;
  $modalContent = null;
  carousel = null;
  data = null;

  constructor({ $target, data }) {
    this.$target = $target;
    this.data = data;

    this.render = this.render.bind(this);

    this.$modal = document.createElement("section");
    this.$modal.setAttribute("class", "modal--closed");
    this.$modal.setAttribute("data-action", "modal-close");
    this.$target.appendChild(this.$modal);

    this.$modalContent = document.createElement("article");
    this.$modalContent.setAttribute("class", "modal__content");
    this.$modal.appendChild(this.$modalContent);

    this.carousel = new Carousel({ $target: this.$modalContent });

    data && this.render();
  }

  open() {
    this.$modal.classList.replace("modal--closed", "modal--opened");
    document.querySelector("body").classList.add("body--scroll-disabled");
  }

  close() {
    this.$modal.classList.replace("modal--opened", "modal--closed");
    document.querySelector("body").classList.remove("body--scroll-disabled");
  }

  setState(nextData) {
    this.data = nextData && JSON.parse(JSON.stringify(nextData));
    this.render();
  }

  render() {
    console.log(this.data);
    const { title, terms, overview, skills, roles, links } = this.data || {};
    this.$modalContent.innerHTML = `
      <header class="modal__header">
        <h1 class="modal__title">${title}</h1>
        <i class="fas fa-times modal__button-close" data-action="modal-close"></i>
      </header>
      <section class="modal__main">
      <h2>프로젝트 개요</h2>
      <p>프로젝트 기간 ${terms}</p>
      <p>${overview}</p>
      <h2>사용 기술</h2>
      <h2>담당 역할</h2>
      <h2>링크</h2>
      <h2>프로젝트 상세</h2>
      <p>
      

Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nesciunt recusandae, eveniet odit molestiae animi ducimus, doloribus cupiditate fugit velit aperiam consequatur ea ex debitis. Itaque dolor quod nam quidem!
Maiores nisi delectus beatae culpa dolore neque rem incidunt cumque perferendis, facere non! Pariatur nulla totam est veritatis nostrum laudantium explicabo id. Officiis sint quisquam rem, rerum veritatis sit optio?
Porro ad praesentium quibusdam fuga cumque iusto nisi facere? Repellendus temporibus quibusdam ipsa corrupti nobis delectus? Inventore maxime consequatur porro sit nesciunt mollitia iusto distinctio, quaerat, ullam, nostrum cupiditate laudantium?
Itaque hic ex aut suscipit esse culpa obcaecati est voluptatibus commodi corrupti omnis nihil quas atque vel nisi, perferendis facilis. Natus, obcaecati? Vero, error repellendus provident excepturi voluptate quasi quaerat.
Cumque possimus animi quaerat sed eligendi. Dicta beatae aspernatur, ducimus alias illum libero ullam a aliquid obcaecati minima eveniet laudantium. Aut consectetur voluptatibus at neque modi tempora eos obcaecati distinctio.
A cum ducimus ad minima neque pariatur laboriosam dignissimos necessitatibus. Earum pariatur quod dolorem alias impedit sequi cumque corporis corrupti quia distinctio natus incidunt sit quo omnis ea, similique a?
Aspernatur voluptates, inventore nisi minus, odit quibusdam culpa laboriosam repudiandae a, fugiat aliquam iure eaque velit fugit ipsa consectetur voluptas necessitatibus! Fuga enim doloribus iusto reprehenderit ipsa quia, recusandae eveniet.
Deserunt ad explicabo, cupiditate quisquam rem dolore vero nemo repellat temporibus provident non fugit facilis enim voluptatum deleniti ipsum cumque ipsa veniam rerum veritatis officiis, distinctio blanditiis commodi placeat! Sequi!
Minus eius delectus molestias maxime accusamus sint libero facere eveniet totam, ut, quas, et ipsa doloremque! Ad, natus aperiam. Suscipit ut unde voluptate, odio ab dicta quaerat quis facilis corrupti?
Sunt nihil maxime omnis eligendi soluta beatae ipsum error quia. Fugiat sunt voluptatum dolorum similique necessitatibus obcaecati aut, voluptate fuga quae soluta quos praesentium consequuntur quidem culpa temporibus! Debitis, architecto!
Officiis ducimus voluptates ipsam repellendus optio perferendis molestias enim quisquam aliquid inventore, asperiores, eum et dolore quod, adipisci vero dolor! Sapiente libero deleniti dolorum nostrum neque molestiae odit ullam aliquid!
Minus sit quo cumque, voluptatibus eaque officiis est. Hic id exercitationem recusandae cumque maxime laborum assumenda dolor, excepturi eligendi nobis adipisci ab, minus inventore enim? Aspernatur modi neque sunt excepturi.
Debitis beatae necessitatibus sit aperiam excepturi nihil, illum maxime, porro labore quos eos alias placeat explicabo rem nisi consectetur perspiciatis dolorem quam quae officia nobis inventore. Illum in architecto iusto.
Dolorem dicta quae sunt consequuntur quasi pariatur perferendis facilis ratione ipsam placeat! Maxime nobis commodi expedita reiciendis quidem magnam enim totam possimus. Adipisci eligendi officiis sed ex quo, eaque at?
Beatae quis suscipit soluta iste dolorem vel, quas, ab aliquid quidem inventore eum porro distinctio assumenda. Consectetur amet a ducimus harum voluptatibus. Voluptas ratione atque, vitae incidunt quas reiciendis iure!
Alias facilis, maiores delectus voluptates sed nihil mollitia, cupiditate illo doloribus laborum, earum dolore soluta deserunt vero quos? Minus similique ad eos, pariatur impedit nesciunt officiis laudantium officia libero vitae?
Nesciunt officia eaque aliquid, corporis doloremque labore beatae, cupiditate minus mollitia tempore eveniet doloribus! Esse autem iure earum dolore optio numquam ipsum fugiat. Maxime, molestias inventore molestiae consectetur nisi rerum!
Porro sapiente alias itaque, ut nemo ex. Accusantium minima vel laborum autem reprehenderit qui dolores cupiditate earum sapiente? Eos eius minus non ullam cupiditate est, nam beatae neque corrupti eveniet!
Iste debitis ipsam cupiditate incidunt consequatur quasi unde et dolorem at! Quibusdam saepe corrupti deleniti dicta doloribus blanditiis. Esse sapiente quibusdam accusamus iste cumque dolor eligendi vero quas aperiam harum!
Fuga ad ipsa nisi quae laudantium cupiditate vero sapiente dolor commodi! Consequatur necessitatibus, earum vero fugiat aliquam maiores quo voluptas. Sequi cupiditate blanditiis fugiat voluptatem nostrum corporis laudantium provident maiores?
Minima aspernatur sint facere voluptas fugiat? Consectetur repudiandae voluptatibus quos natus vel numquam reprehenderit pariatur ipsum alias ex, neque earum iure architecto inventore rem voluptate recusandae? Ullam ipsam aliquam praesentium!
Unde quisquam accusantium itaque assumenda? Mollitia maiores nesciunt iure? Aliquam, ab fugit unde alias adipisci doloremque tempore laboriosam, quam porro, nostrum provident. Esse provident asperiores ipsum consequatur quos facere delectus!
Asperiores, nisi non! Reprehenderit optio soluta maxime mollitia officia molestias eos cum adipisci tempora asperiores eveniet voluptatibus saepe nisi ea iure, et possimus repudiandae libero architecto vel! Vero, ipsam sint!
Impedit, dolorum eum! Voluptas blanditiis velit suscipit accusamus illum ratione temporibus quidem vel, nesciunt commodi debitis delectus aspernatur saepe quia doloremque eligendi a ex eaque soluta at eveniet! Optio, non.
Quas ipsum dolore aspernatur est necessitatibus recusandae deleniti porro fuga architecto consequatur. Perferendis fugiat aliquam, assumenda sint quia dolorum alias molestias sequi maxime modi quo, earum nam quae quis deleniti?
Eveniet excepturi mollitia optio adipisci vitae veniam incidunt consequatur. Velit et autem, magnam libero quas tenetur dolorem ea laudantium corporis quidem assumenda. Laboriosam quos obcaecati possimus harum porro officia minima?
Fugit totam voluptatibus consectetur, tenetur laboriosam eaque distinctio saepe dolorum officiis ab iste? Debitis quisquam, consequuntur assumenda aliquid dolorum nemo voluptates officia dignissimos, illo vitae doloribus, sequi dolore aperiam? Voluptate.
Expedita blanditiis laboriosam beatae nostrum quos officia similique harum labore aut mollitia porro cum in esse, facilis veritatis explicabo accusantium odio. Magni nobis commodi quos eligendi, dolorem quaerat nam neque.
Voluptas reprehenderit quibusdam magnam suscipit rem optio illo tempora quisquam consequuntur nemo molestias eaque molestiae ea reiciendis obcaecati necessitatibus illum, placeat quis similique. Ea quidem quaerat voluptate nisi eaque quasi?
Similique consequuntur nulla facilis obcaecati. Eius perferendis vero neque, placeat eligendi harum maxime ab animi ipsam eaque doloribus tempora ex! Voluptate autem nam aut praesentium. Necessitatibus nulla iste dolore blanditiis.
Iste molestias voluptatum accusamus voluptatem minima dicta reprehenderit saepe ex. Iure sunt quam omnis voluptatibus modi nam magnam accusantium maiores a non, alias dolorem aut quidem sequi fugiat distinctio dignissimos?
Enim natus, expedita voluptates repellat commodi ex illo quaerat beatae alias ipsa. Quibusdam, ipsum et fugiat totam accusamus maxime autem omnis neque, eveniet blanditiis velit cum reiciendis natus ullam veniam.
Ipsam accusantium eius sequi libero maiores itaque asperiores. Iure, doloremque accusamus, quas repellat rem dignissimos maiores alias autem quibusdam fugit distinctio molestias pariatur. Consequatur repellendus autem inventore ipsam nam ullam.
Commodi, quam odio? Assumenda, omnis vitae aut praesentium obcaecati impedit incidunt, molestiae distinctio aliquid molestias, nisi fugiat ex neque ipsam! Quo quis laboriosam, accusantium quisquam dolores quod! Aut, nulla recusandae.
Qui pariatur quisquam, ut temporibus nam laborum commodi consequatur tempora voluptate! Laboriosam voluptate quod eaque aspernatur veniam similique sit quas autem et. Voluptatibus et voluptatum eligendi? Recusandae provident nihil mollitia.
Ad autem inventore tempore nesciunt, quos, delectus, molestias atque facere quo minima aperiam aliquam eveniet ipsa repudiandae sit saepe placeat assumenda mollitia repellendus! Nostrum assumenda id ea veniam expedita. Non?
Omnis, molestiae. Consequatur explicabo quia placeat minima quaerat et expedita quae harum temporibus architecto repellendus dolores officia rerum tenetur consectetur, ducimus nisi autem! Sit, facilis quaerat adipisci commodi beatae maxime!
Laboriosam, ad quidem. A aut nihil ut? Sunt dolor quia amet impedit nisi maxime optio rem commodi quam. Perspiciatis laboriosam quam, blanditiis maxime velit dolorem magnam cum error vero expedita.
Commodi ex, libero mollitia soluta voluptates dolorum dolore. Illo libero odio dignissimos officiis ea repellendus vitae suscipit, similique, ut minus voluptatum nemo voluptate! Maiores hic dolorem nulla! Reiciendis, officia officiis.
Totam iusto at reprehenderit rerum? Ut quae sit provident cupiditate ipsum nemo commodi, deleniti voluptas dolorem nulla. Alias nostrum reprehenderit at perferendis autem eum corrupti impedit, blanditiis, possimus dolor quo.
Natus asperiores quasi commodi ipsa, unde quisquam culpa cumque labore. Fuga, nemo iure nostrum mollitia aliquam quam suscipit obcaecati sequi optio autem dolorem delectus eum dolorum, quibusdam minima magni recusandae.
Aut cum repellendus officia maxime dolorum consectetur? Impedit sit eveniet voluptatem nihil. Corporis sunt nostrum, natus quos quibusdam, ad cum sequi quae quisquam dolore voluptas vitae. Quam omnis magni quibusdam!
Placeat porro ipsa aliquid natus omnis illum, error, facere laborum iste eaque voluptatibus quam consequatur sequi quod sapiente voluptate totam praesentium nisi rerum excepturi exercitationem molestias. Voluptates dicta architecto nihil.
Recusandae in veniam cupiditate nulla explicabo reprehenderit voluptas quasi itaque ipsa tempore saepe molestiae aperiam aut accusamus obcaecati exercitationem consequatur dolor esse nam laudantium, vero assumenda nostrum ab rem! Non.
Voluptatem aliquid veniam, nobis ea veritatis blanditiis aliquam, reprehenderit quisquam delectus molestias, provident quam. At, libero unde! Assumenda iste quo eligendi, provident, eveniet in architecto et possimus, laboriosam distinctio perferendis?
Voluptatem impedit sequi cumque placeat magnam neque provident laudantium aliquid sunt illum beatae ad, sed a quisquam temporibus ipsum quae veniam nobis minus deleniti consectetur unde aspernatur culpa enim. Ipsum.
Nihil libero voluptate impedit voluptatum cupiditate corporis voluptatem explicabo deleniti asperiores labore dolor accusantium ipsum, recusandae atque ex enim beatae, commodi voluptas nobis iure suscipit totam nulla earum voluptatibus! Veniam?
Doloribus, culpa id iste et animi amet atque recusandae sint necessitatibus, pariatur dicta? Odit libero impedit tenetur temporibus similique quasi sint, mollitia recusandae sit fuga fugiat aliquid omnis nostrum asperiores.
Laboriosam, doloribus? Doloribus ducimus ipsum, optio enim deleniti dolores aspernatur voluptatem nulla fugit voluptatum perspiciatis iure beatae, distinctio esse autem quam fuga eos, voluptate veritatis sint odit! Hic, voluptatibus voluptatum.
Illum ea deserunt adipisci rem maxime tenetur dicta suscipit natus autem facere, nobis assumenda consequatur voluptas modi distinctio odit voluptatibus labore blanditiis velit magnam voluptatem quidem! Tenetur repellat nemo tempora.
Consequuntur, iusto debitis non in eaque natus quam recusandae quidem ab voluptates quibusdam itaque, dolorum numquam! A ullam corporis assumenda. Impedit optio itaque maiores vitae exercitationem magnam commodi voluptatem tenetur?
Expedita nam commodi dolorum nulla fugiat iusto iure exercitationem impedit provident nihil temporibus perferendis aspernatur laboriosam, autem neque repellat dolorem nostrum ducimus similique aut obcaecati suscipit! Ipsam soluta architecto cupiditate?
Excepturi, nisi, asperiores dignissimos odit dolorum laborum sapiente ut quibusdam veniam harum voluptatem blanditiis reiciendis minus, hic esse voluptate non. Eveniet omnis expedita numquam repellat saepe vitae illo, nesciunt explicabo.
Sapiente, ut sequi voluptatum harum repellendus quas, cupiditate optio, dicta accusamus facere ad qui. Itaque corrupti deleniti harum dolore laborum ipsa natus iusto quibusdam! Magni ducimus officiis quibusdam mollitia illum?
Perspiciatis autem dignissimos nisi nesciunt sint vero minima, totam facilis odit cumque placeat ex accusantium sapiente rem itaque illo enim quis. Officia sint suscipit perspiciatis, ipsum quae totam quod atque?
Nihil alias commodi earum sequi esse harum veritatis, reprehenderit, iure consequatur quam at corrupti. Iusto, quaerat! Odio ipsam commodi repellendus libero, molestias, sit et placeat mollitia dignissimos, beatae qui. Deserunt?
Quod consectetur enim voluptatibus inventore nobis expedita perferendis explicabo laborum dicta laboriosam, soluta iusto, harum maxime quo aut fugiat nisi et, esse libero! Dignissimos impedit ipsa, incidunt quasi tenetur dolorem?
In odio magnam repellat cupiditate debitis dolorum totam reiciendis, architecto magni voluptate, fuga aliquam quaerat quia voluptas inventore eum? Quidem, impedit odio eveniet velit nobis animi alias sequi omnis? Quod!
Ut nobis, cupiditate temporibus, nemo excepturi, repellendus amet quas non est pariatur suscipit. Inventore unde deserunt quaerat exercitationem repellat obcaecati quam quasi rerum eum iste mollitia nostrum, maxime sunt aliquid.
Assumenda laborum, enim exercitationem veniam vel recusandae, autem nobis molestias nostrum neque aspernatur saepe quo incidunt, minus quisquam inventore quaerat similique magni quas quidem voluptatem consequatur nesciunt omnis repellendus? Excepturi.
Aliquam, sapiente vero. Temporibus perspiciatis numquam laudantium quos explicabo, dolores sapiente, repellat doloribus voluptates necessitatibus facilis esse obcaecati dolorem ullam mollitia consequuntur similique soluta ab error? Ratione vero illum facere!
Aperiam modi cupiditate voluptate perspiciatis rem eveniet numquam ex distinctio error ratione dolorem, delectus, minima sed rerum nesciunt tempora et ipsam omnis eum illum voluptatibus dicta. Inventore quae molestiae consequatur.
Tenetur, nulla perspiciatis? Doloribus obcaecati dignissimos totam numquam! Cupiditate rem odio placeat reiciendis saepe, eveniet ipsa, iusto id temporibus voluptatem, eaque eligendi corrupti sunt. Ducimus magnam quibusdam ullam nemo inventore.
Vitae iste soluta, cumque tempore, sequi omnis quos eius doloribus obcaecati nisi quo doloremque recusandae ab quia nesciunt eos consectetur hic dolores in labore. Maxime possimus deserunt facere assumenda fugit.
Iste eaque est eos porro amet ipsum, eius magni, deserunt, ex velit placeat odit. Itaque odit, et qui natus officiis tenetur molestias accusamus nesciunt error optio est, eveniet voluptatem accusantium?
Voluptatem harum cumque sit error neque repellat quaerat ab amet praesentium dolores, minima omnis vitae dolorem reprehenderit deleniti porro libero necessitatibus cum cupiditate quidem doloribus alias officiis nemo? Et, ex!
Vel consequatur expedita assumenda eveniet nihil numquam ducimus officia quam corporis, quasi porro rerum debitis quas odio dignissimos perspiciatis! Nam et possimus in quasi animi tempora est quis fugiat perferendis?
Repudiandae libero ipsum provident ex sint laborum quaerat! Placeat reprehenderit libero qui, nam fugiat atque aperiam dolorem perferendis laborum numquam, earum non soluta blanditiis alias! Exercitationem deserunt nemo voluptas ea.
Cumque provident itaque iusto fuga placeat laborum quisquam ea assumenda ut, repudiandae facilis at quibusdam autem mollitia voluptatem molestiae qui quod hic incidunt perspiciatis earum eaque ipsam! Quo, magni ex!
Sit aperiam beatae rem repellat officia! Maiores recusandae in inventore rem, voluptatum omnis officiis perspiciatis commodi ducimus quasi eos tenetur quibusdam ipsum quis eum suscipit ipsam accusantium ut laborum consequatur.
Vitae delectus illo quibusdam sint nostrum dicta sapiente ad facilis fugiat voluptatem beatae ex nemo labore quas sed qui reprehenderit asperiores porro quisquam temporibus sequi, excepturi voluptate! Labore, rem hic.
Quaerat atque, sunt dolorem animi quis repellendus fugiat accusantium praesentium vitae rem eos reiciendis reprehenderit harum modi provident, ducimus voluptatem quibusdam, rerum quam enim? Vitae architecto aliquid illum fugiat at.
Eveniet quae omnis eos, recusandae neque doloremque quia harum nobis, dolores provident fugiat rem illum suscipit voluptatem officia maiores dolorem consectetur excepturi itaque impedit. Fugit eos ipsum illum nam corporis.
Facilis, hic. Cumque, quas dicta beatae dignissimos porro magni cupiditate quos accusantium a, doloremque illo blanditiis laudantium, sunt architecto reiciendis. Soluta deserunt dolore cum minima, velit saepe. Impedit, magni temporibus?
Excepturi natus repellendus accusamus inventore unde soluta consectetur ea pariatur explicabo placeat cum quis reprehenderit consequatur sequi impedit beatae ipsa dolor, ab officia odio suscipit voluptate reiciendis! Doloribus, voluptates similique!
Ipsum iste nihil alias, quibusdam et error id illo praesentium, reiciendis facere accusamus! Optio expedita aspernatur maiores iure harum repellendus, vel quasi voluptatem aperiam dignissimos odio quos, minus, ea suscipit?
Quod ipsum praesentium earum nihil saepe voluptas nesciunt dignissimos, sapiente at autem blanditiis vero tenetur harum atque facere sunt quasi reprehenderit magni libero! Quam dolor exercitationem tempora autem. Neque, rem.
Quod reiciendis maiores cumque consequatur, mollitia id itaque nam assumenda magnam dolores odio pariatur tempora ab libero quasi. Quos maiores libero dolores praesentium quasi eius itaque aut nesciunt, ipsam suscipit?
Iste vitae assumenda debitis sequi vero non, qui dolores nesciunt itaque accusantium, sit porro aspernatur quisquam corporis, maxime sapiente consequatur quibusdam maiores a quae rem similique temporibus reprehenderit! Commodi, nulla.
Debitis ut iusto culpa eos delectus officia, ipsa at quam saepe dicta necessitatibus quod voluptate cumque animi quibusdam illo amet omnis aliquam quis expedita quidem nulla. Quos esse exercitationem ex?
Ab, natus aspernatur reprehenderit corrupti perferendis ea cum laborum sint quae qui dolorem harum at beatae veritatis fugiat explicabo. Non, fugiat sed tenetur excepturi a hic minus voluptatum praesentium reprehenderit?
Reprehenderit ullam obcaecati dignissimos numquam, quam doloremque accusantium excepturi quidem dolores consequuntur quisquam voluptas suscipit vel eaque odit aut earum architecto. Vel ducimus corporis dolores nulla minima molestiae nemo veritatis!
Laboriosam repellendus incidunt error commodi rerum eaque expedita, suscipit non quod. Adipisci, fugit voluptate sint nihil maxime id eveniet aperiam iusto minima quod laboriosam recusandae officia eligendi veniam fugiat cum.
Perferendis odio veritatis quam excepturi assumenda harum architecto omnis! Magnam doloribus iure ratione similique deleniti quia aperiam aspernatur consequuntur a. Minus, ut cum asperiores et facilis perferendis numquam adipisci velit!
Et, repellendus facilis? Quod, architecto? Inventore distinctio, consequatur dolores nam provident id! Impedit voluptatibus dolore minus molestias, omnis at eum cupiditate, rerum nisi, iure modi ex repellat doloribus assumenda excepturi!
Cupiditate sequi placeat recusandae quod error aut perferendis nesciunt illo aperiam optio fuga aliquam quam quis omnis quidem ea nisi voluptate ipsa, commodi maiores repudiandae quos voluptas. Possimus, animi ea.
Placeat facere possimus facilis. Recusandae eligendi sed, tempora ex dolor dignissimos tenetur delectus aut. Deleniti eos, maxime molestiae facilis nisi porro, placeat voluptatum amet nobis ipsam animi ea maiores laboriosam.
In, dolorem repellendus maiores commodi at inventore odio magnam? Consectetur molestiae eligendi dolorum mollitia soluta pariatur delectus ea, accusamus minus et voluptas excepturi cumque facilis, maiores quibusdam praesentium voluptatibus ducimus.
Praesentium minima mollitia quis, consequuntur distinctio, aliquid, atque obcaecati voluptate vitae nisi amet vero delectus fugiat repellendus odit labore. Nam vitae animi dolorem ipsam! Provident dolores explicabo obcaecati unde placeat!
Dolorem neque cumque pariatur cupiditate saepe delectus? Expedita veritatis sunt inventore saepe aliquid quisquam officia blanditiis esse velit modi! Provident, laudantium? Veritatis debitis enim ab saepe repellat repudiandae porro ullam.
Obcaecati facere adipisci animi dolores quae eligendi minima sed, veritatis quo mollitia, dignissimos voluptate porro? Soluta dolorum facilis doloremque unde, veniam aliquid doloribus beatae? Nobis quasi illum rem eum quisquam.
Esse minus aspernatur doloremque magni possimus, veritatis rerum cupiditate obcaecati consequuntur illum nostrum sed! Corporis eaque eum numquam iure fugit, eius nihil. Temporibus non exercitationem quaerat sequi, et incidunt id.
Quam amet blanditiis distinctio voluptate nihil officiis molestias eveniet explicabo laborum et ipsum, est aliquam id iste nemo odio natus sed placeat rem fugiat eius esse aut repellendus? Quaerat, accusantium?
Ipsum commodi ex facere vel labore, quas sequi? Quas odit labore, magni laboriosam consectetur debitis est ab cum quia distinctio commodi voluptatum eum doloribus quos, fugit suscipit eos qui pariatur!
Vitae, debitis sapiente molestias ducimus pariatur, exercitationem aliquam, eaque itaque numquam beatae delectus eos tenetur? Facilis nobis itaque provident necessitatibus praesentium minima, omnis molestiae ea laborum molestias corporis quas sit?
Pariatur sint perferendis consequatur vel eius quam dolorem doloribus aperiam temporibus. Fugiat voluptates iure labore temporibus repudiandae, accusantium non vero hic sapiente, corporis delectus nihil explicabo. Beatae blanditiis debitis sint!
A perspiciatis sequi ratione hic reprehenderit, adipisci veniam unde illo blanditiis enim! Dolorum perferendis qui soluta exercitationem veritatis hic molestias quisquam quia non. Voluptates rem esse, aspernatur ratione aliquid quos?
Pariatur dolorem unde nemo enim minus repellat quos, quod nam, quas dicta at modi ex omnis laborum aliquam doloribus quibusdam incidunt sit. Nam quisquam eaque quas omnis vero, mollitia dolores?
Voluptatibus maxime fuga quia nisi cumque architecto doloribus, aliquid eum, dolor blanditiis molestiae voluptatem quasi possimus, repudiandae ad veniam incidunt enim asperiores ex quas! Sequi exercitationem quia et magni unde.
Voluptate fugiat laudantium perferendis porro, distinctio suscipit error animi adipisci voluptatum ipsa, provident impedit harum quisquam cupiditate pariatur at, totam aliquam accusamus molestias quam inventore aut alias sapiente! Fuga, esse.
      </p>
      </section>
    `;
  }
}
