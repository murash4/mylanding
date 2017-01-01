<div class="deal-type">
	<div class="deal-type__item">
		<input type="radio" name="deal-type" id="deal-type-1" checked>
		<label for="deal-type-1" class="label-radio-type-1">Продажа</label>
	</div>
	<div class="deal-type__item">
		<input type="radio" name="deal-type" id="deal-type-2">
		<label for="deal-type-2" class="label-radio-type-1">Аренда</label>
	</div>
</div>
<div class="search-object-form__main-info">
	<div class="form-price-block">
		<div class="form-line label-radio-wrap">
			<input type="radio" name="object-view" id="object-view-1">
			<label for="object-view-1" class="label-radio-type-2">Комната</label>
			<input type="radio" name="object-view" id="object-view-2" checked>
			<label for="object-view-2" class="label-radio-type-2">Квартира</label>
			<input type="radio" name="object-view" id="object-view-3">
			<label for="object-view-3" class="label-radio-type-2">Дом / Коттедж</label>
		</div><!--form-line-->
		<div class="form-line">
			<label for="">Цена, руб.:</label>
			<div class="input-wrap-outer flex-container">
				<div class="input-wrap">
					<div class="input-wrap-inner">
						<input type="text">
					</div>
				</div>
				<div class="hyphen">-</div>
				<div class="input-wrap">
					<div class="input-wrap-inner">
						<input type="text">
					</div>
				</div>
			</div><!--input-wrap-outer-->
		</div><!--form-line-->
	</div><!--form-price-block-->
	<div class="object-plan-block">
		<div class="form-line margin-modif-select">
			<div class="label-radio-wrap inline">
				<input type="radio" name="object-plan" id="object-plan-1" checked>
				<label for="object-plan-1" class="label-radio-type-2"><span class="hide-mobile-inline">Свободная</span><span class="show-mobile-inline">Своб.</span> планировка</label>
				<input type="radio" name="object-plan" id="object-plan-2">
				<label for="object-plan-2" class="label-radio-type-2">1к</label>
				<input type="radio" name="object-plan" id="object-plan-3">
				<label for="object-plan-3" class="label-radio-type-2">2к</label>
				<input type="radio" name="object-plan" id="object-plan-4">
				<label for="object-plan-4" class="label-radio-type-2">3к</label>
				<input type="radio" name="object-plan" id="object-plan-5">
				<label for="object-plan-5" class="label-radio-type-2">4+к</label>
			</div><!--radio-wrap-->
			<div class="input-wrap inline-right">
				<select name="" id="material-home" class="select-type-1">
					<option value="0">Кирпичный дом</option>
					<option value="1">Панельный дом</option>
					<option value="2">Деревянный дом</option>
					<option value="3">Другое</option>
				</select>
				<label for="material-home" class="mobile-select-label selectBox select-type-1 selectBox-dropdown">
					<span class="selectBox-label" style="width: 150px;">Кирпичный дом</span>
					<span class="selectBox-arrow"></span>
				</label>
			</div>
		</div><!--form-line-->
		<div class="form-line">
			<div class="wrap-2-input-wraps">
				<div class="wrap-2-input-wraps__block">
					<label for="">Площадь, м<sup>2</sup>:</label>
					<div class="input-wrap-outer flex-container">
						<div class="input-wrap">
							<div class="input-wrap-inner">
								<input type="text">
							</div>
						</div>
						<div class="hyphen">-</div>
						<div class="input-wrap">
							<div class="input-wrap-inner">
								<input type="text">
							</div>
						</div>
					</div><!--input-wrap-outer-->
				</div><!--wrap-2-input-wraps__block-->
				<div class="wrap-2-input-wraps__block">
					<label for="">Этаж:</label>
					<div class="input-wrap-outer flex-container">
						<div class="input-wrap">
							<input type="text">
						</div>
						<div class="hyphen">-</div>
						<div class="input-wrap">
							<input type="text">
						</div>
					</div><!--input-wrap-outer-->
				</div><!--wrap-2-input-wraps__block-->
			</div><!--wrap-2-input-wraps-->
			<div class="checkbox-wraps">
				<div class="checkbox-wrap">
					<input type="checkbox" name="no-1-floor" id="no-1-floor">
					<label for="no-1-floor">не первый</label>
				</div>
				<div class="checkbox-wrap">
					<input type="checkbox" name="no-last-floor" id="no-last-floor">
					<label for="no-last-floor">не последний</label>
				</div>
			</div><!--checkbox-wraps-->
		</div><!--form-line-->
	</div><!--object-plan-block-->
	<div class="form-line selects-block">
		<div class="input-wrap inline-left">
			<select name="" id="time-home" class="select-type-2">
				<option value="0">Вторичное / новостройка</option>
				<option value="1">Дом</option>
			</select>
			<label for="time-home" class="mobile-select-label selectBox select-type-2 selectBox-dropdown">
				<span class="selectBox-label" style="width: 150px;">Вторичное / новостройка</span>
				<span class="selectBox-arrow"></span>
			</label>
		</div>
		<div class="input-wrap inline-left push-top no-margin-right">
			<select name="" id="time-way" class="select-type-1">
				<option value="0">Пешком от метро</option>
				<option value="1">5 мин.</option>
				<option value="2">10 мин.</option>
				<option value="3">15 мин.</option>
				<option value="4">20 мин.</option>
			</select>
			<label for="time-way" class="mobile-select-label selectBox select-type-1 selectBox-dropdown">
				<span class="selectBox-label" style="width: 150px;">Пешком от метро</span>
				<span class="selectBox-arrow"></span>
			</label>
		</div>
		<div class="metro-stations-block">
			<span class="metro-stations-block__text">Станции метро рядом:</span>
			<div class="metro-stations-block__add-wrap push-top">
				<label for="metro-station" class="metro-stations-block__add">Добавить станцию</label>
				<div class="input-wrap">
					<select name="" id="metro-station" class="select-type-3 add-metro-station" multiple="multiple">
						<option value="0" class="yellow">Авиамоторная</option>
						<option value="1" class="green">Автозаводская</option>
						<option value="2" class="orange">Академическая</option>
						<option value="3" class="blue">Александровский сад</option>
						<option value="4" class="orange">Алексеевская</option>
						<option value="5" class="green">Алма-Атинская</option>
						<option value="6" class="gray">Алтуфьево</option>
						<option value="7" class="gray">Аннино</option>
						<option value="8" class="darkblue">Арбатская (Арбатско-Покровская линия)</option>
						<option value="9" class="blue">Арбатская (Филевская линия)</option>
						<option value="10" class="green">Аэропорт</option>
					</select>
				</div>
				<div class="selected-metro"></div>
			</div>
		</div><!--metro-stations-block-->
	</div><!--form-line-->
</div><!--search-object-form__main-info-->
<div class="search-object-form__bottom">
	<div class="search-object-form__change-params js-reset-form">Изменить параметры поиска</div>
	<button type="submit" class="btn js-search-objects">Показать объекты</button>
</div>