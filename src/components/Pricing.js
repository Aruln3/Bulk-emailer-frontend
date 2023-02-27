import React, { useState } from 'react'
import { NavLink ,useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import "./mix.css"
import {URL} from '../App';

export default function Pricing() {
return (

<section>
<div class="wrapper">
<div class="table basic">
<div class="price-section">
<div class="price-area">
<div class="inner-area">
<span class="text">$</span>
<span class="text price">29</span>
</div>
</div>
</div>
<div class="package-name"></div>
<ul class="features">
<li>
<span class="list-name">300 emails/day</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">Customizable Email Templates</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">Transactional Emails</span>
<span class="icon cross"><i class="fas fa-times"></i></span>
</li>
<li>
<span class="list-name">Drag & Drop Editor</span>
<span class="icon cross"><i class="fas fa-times"></i></span>
</li>
<li>
<span class="list-name">SMS & WhatsApp Campaigns</span>
<span class="icon cross"><i class="fas fa-times"></i></span>
</li>

</ul>
<div class="btn"><button>Purchase</button></div>
</div>
<div class="table premium">
<div class="ribbon"><span>Recommend</span></div>
<div class="price-section">
<div class="price-area">
<div class="inner-area">
<span class="text">$</span>
<span class="text price">59</span>
</div>
</div>
</div>
<div class="package-name"></div>
<ul class="features">
<li>
<span class="list-name">From 20k emails/month</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">No daily sending limit</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">No Bulk Emailer logo (add-on)</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">Multi-user access</span>
<span class="icon cross"><i class="fas fa-times"></i></span>
</li>
<li>
<span class="list-name">Basic reporting & analytics</span>
<span class="icon cross"><i class="fas fa-times"></i></span>
</li>

</ul>
<div class="btn"><button>Purchase</button></div>
</div>
<div class="table ultimate">
<div class="price-section">
<div class="price-area">
<div class="inner-area">
<span class="text">$</span>
<span class="text price">99</span>
</div>
</div>
</div>
<div class="package-name"></div>
<ul class="features">
<li>
<span class="list-name">All Existing Templates</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">Advanced Integrations</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">Personalized support for 24*7</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">Advanced statistics</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
<li>
<span class="list-name">Marketing Automation</span>
<span class="icon check"><i class="fas fa-check"></i></span>
</li>
</ul>
<div class="btn"><button>Purchase</button></div>
</div>
</div>

</section>

);
}